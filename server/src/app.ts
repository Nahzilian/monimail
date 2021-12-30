import express from 'express';
import {connectRedis} from './configs/redis'

const app = express();
const port = 4000;

// Async configs go here
(async () => {
  connectRedis()
})();


app.get('/', (_, res) => {
  res.send("Hello World!");
});

// app.get('/test_set', async (_,res) => {
//   await client.set("something", "cool")
//   res.send("OK")
// })

// app.get('/test_get', async (_,res) => {
//   const val = await client.get("something")
//   res.send(`Something ${val}` )
// })

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

