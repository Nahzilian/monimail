import express from 'express';
import { connectRedis } from './configs/redis'
import configs from './configs/default'
import MySQLDatabase from './configs/mysql';
import bodyParser from 'body-parser';
import { userRoute } from './routes/auth';

const app = express();
const port = 4000;
export let mysql: MySQLDatabase;

// Async configs go here
(async () => {
  mysql = configs()
  connectRedis()
})();

// app.get('/test_set', async (_,res) => {
//   await client.set("something", "cool")
//   res.send("OK")
// })

// app.get('/test_get', async (_,res) => {
//   const val = await client.get("something")
//   res.send(`Something ${val}` )
// })

// app.get('/test_salt', async (_, res) => {
//   const hashed = await encryptPassword("testingpassword")
//   console.log(hashed)
//   res.send(hashed)
// })

app.use(bodyParser.json())
app.use("/api/v1/user", userRoute) //repeat this line to create new route -> create new .ts file within routes
app.use("/api/v1/user", userRoute)

app.get('*', (_, res) => {
  res.send("PAGE NOT FOUND");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

