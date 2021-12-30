import express from 'express'
import configs from './configs/default'

const app = express();
const port = 3000;

configs()

app.get('/', (_, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});