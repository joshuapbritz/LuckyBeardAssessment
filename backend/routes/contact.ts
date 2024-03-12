import { Router } from 'express';
const router = Router();
import { makeRequest } from '../library/request';
import { IErrorResponse } from '../models/error-response';
import { IContactForm } from '../models/contact-form';
import { verifyContactForm } from '../library/verify-contact-form';
import mailgun from 'mailgun-js';
import dotenv from 'dotenv';

dotenv.config();

const mg = mailgun({ apiKey: process.env.MAIL_SECRET!, domain: process.env.MAIL_DOMAIN! });

router.post('/', async (req, res) => {
  const contactLead = req.body as IContactForm;
  const populated = verifyContactForm(contactLead);

  if (!populated) res.status(500).json(new IErrorResponse(`Lead has missing values`, 500));

  const data = {
    from: 'Joshua Britz <joshuabritz@gmail.com>',
    to: process.env.RECEIVER_EMAIL!,
    subject: 'New Dealr Demo Request (Joshua Britz)',
    html: `
    <h1>New Dealr Demo Request</h1>
    <ul>
      ${Object.entries(contactLead)
        .map(([name, value]) => {
          return `<li>${name}: ${value}</li>`;
        })
        .join('\n')}
    </ul>`,
  };

  mg.messages().send(data, function (error, body) {
    res.status(200).json({ message: 'success' }).end();
  });
});

router.get('/articles', async (req, res) => {
  try {
    const result = await makeRequest<number[]>(`https://hacker-news.firebaseio.com/v0/topstories.json`);

    const ids = result.slice(0, 3);

    const compiledArticles = [];

    for (const id of ids) {
      try {
        const article = await makeRequest(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        compiledArticles.push(article);
      } catch (error) {
        res.status(500).json(new IErrorResponse(`Failed to load articles`, 500));
        return;
      }
    }

    res.status(200).json(compiledArticles);
  } catch (error) {
    res.status(500).json(new IErrorResponse(`Failed to load articles`, 500));
  }
});

export default router;



