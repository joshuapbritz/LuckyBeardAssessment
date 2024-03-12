import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

console.log(process.env.RECEIVER_EMAIL);

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('The Lucky API');
});

app.use('/contact', contactRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

