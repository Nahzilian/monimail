import express, { Request, Response } from 'express';
import { getUserById, getUserByUsername, emailInUse } from '../data/query';
import { isPasswordCorrect, encryptPassword } from '../modules/authentication';
import { createNewUser } from '../data/addition';
import { mysql } from '../app';
import { generateAccessToken } from '../modules/access';
import * as uuid from "uuid";
import { create } from 'domain';

const userRoute = express.Router();

userRoute.post("/register", async (req: Request, res: Response) => {
  try {
    let firstname: string = req.body.firstname
    let lastname: string = req.body.lastname
    let email: string = req.body.email
    let username: string = req.body.username
    let pass: string = req.body.password
    let role: string = req.body.role
    let company: string = req.body.companyid

    const password = await encryptPassword(pass)
    let results = await emailInUse(email);
    if (results === true) {
      return res.status(409).send("Email in Use");
    } else {
      const guid: string = uuid.v4();
      try {
        await createNewUser(guid, firstname, lastname, email, username, password, role, company, async (data) => {
          getUserByUsername(username, async (d) => {
            if (d === undefined) {
              return res.status(400).send("User does not exist");

            } else {
              console.log('---Generating Access Token')
              const token = await generateAccessToken(email)
              console.log(token)
              console.log({ 'access': token, d })
              return res.json({ 'accessToken': token, d })
            }
          })
        })

      } catch (err) {
        console.log(err)
      }
    }
  } catch (error) {
    console.log(error);
  }
})
/**
 * Sign up
 * Add data to database (Make a new query for this)
 * Create new token
 * Send back the information while data being stored (Includes token, user, company)
 * 
 * 
 * Others:
 * Make middleware to check for auth (based on role)
 * Check login data => If exists and right password (with cache)
 * Check registered data => If data does not exist (username/email does not exist)
*/

userRoute.post("/login", async (req: Request, res: Response) => {
  let username: string = req.body.username
  let password: string = req.body.password

  getUserByUsername(username, async (data) => {
    if (!data) return res.status(400).send("User does not exist")
    let check = await isPasswordCorrect(password, data.password)
    if (!check) return res.status(400).send("Incorrect password")
    // Give token to user
    // Give user data + company to the client

    return res.send(data)
  })

})

userRoute.get("/:userId", async (req: Request, res: Response) => {
  let userId: string = req.params.userId
  // 291622df-1ed7-41fd-bc41-ce8f0ab87331
  try {
    getUserById(userId, (data) => {
      res.send(data)
    })
  } catch (err) {
    res.send(err)
  }
})

export { userRoute }