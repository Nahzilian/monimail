import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send(`Hello World! my DB name is ${process.env.DB_HOST}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});