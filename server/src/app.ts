import express from 'express';
import client, {connectRedis} from './configs/redis'
import configs from './configs/default'

import {encryptPassword} from './modules/authentication'

const app = express();
const port = 4000;

// Async configs go here
(async () => {
  configs()
  //connectRedis()
})();

app.get('/', (_, res) => {
  res.send("Hello World!");
});

app.get('/test_set', async (_,res) => {
  await client.set("something", "cool")
  res.send("OK")
})

app.get('/test_get', async (_,res) => {
  const val = await client.get("something")
  res.send(`Something ${val}` )
})

app.get('/test_salt', async (_, res) => {
  const hashed = await encryptPassword("testingpassword")
  console.log(hashed)
  res.send(hashed)
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

