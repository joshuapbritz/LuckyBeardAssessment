import { Router } from 'express';
const router = Router();
import request from 'request';
import { makeRequest } from '../library/request';
import { IErrorResponse } from '../models/error-response';
import { IArticle } from '../models/article';

router.post('/', async (req, res) => {
  console.log(req.body);
  setTimeout(() => {
    res.status(200).json({ message: 'success' });
  }, 2000);
});

router.get('/articles', async (req, res) => {
  try {
    const result = await makeRequest<number[]>(`https://hacker-news.firebaseio.com/v0/topstories.json`);

    const ids = result.slice(0, 3);
    console.log(ids);

    const compiledArticles = [];
    
    for (const id of ids) {
      const article = await makeRequest(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      compiledArticles.push(article);
    }

    res.status(200).json(compiledArticles);
  } catch (error) {
    res.status(500).json(new IErrorResponse(`Failed to load articles`, 500));
  }
});

export default router;


