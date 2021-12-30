import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const redis = require('redis');
const app = express();
const port = 3000;


(async () => {
  const client = redis.createClient({ host:'Monimail', port: 6379 })

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.ping();

  await client.set('key', 'value');
  const value = await client.get('key');
})();





app.get('/', (_, res) => {
  res.send(`Hello World! my DB name is ${process.env.DB_HOST}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

