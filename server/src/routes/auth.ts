import express, {Request, Response} from 'express'
import { getUserById, getUserByUsername } from '../data/query';
import {isPasswordCorrect} from '../modules/authentication'
import * as jwt from 'jsonwebtoken'
import { User } from '../data/user';
const userRoute = express.Router();
// Sign up

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
        if(!data) return res.status(400).send("User does not exist")
        let check = await isPasswordCorrect(password, data.password)
        if(!check) return res.status(400).send("Incorrect password")
        // Give token to user
        const accesstoken = jwt.sign({id: data.id, role: data.role, time: Date.now}, process.env.TOKEN_KEY,{expiresIn: "1h",});
        const refreshtoken = jwt.sign({id: data.id, role: data.role, time: Date.now}, process.env.TOKEN_KEY,{expiresIn: "1d",});
        res.header('access-token',accesstoken).send(accesstoken);
        res.header('refresh-token',refreshtoken).send(refreshtoken);
        // Give user data + company to the client

        return res.send(data)
    })
    
})

userRoute.get("/:userId", async (req: Request, res: Response) => {
    let userId:string = req.params.userId
    // 291622df-1ed7-41fd-bc41-ce8f0ab87331
    try {
        getUserById(userId, (data) => {
          res.send(data)
        })
      } catch(err) {
        res.send(err)
      }
})

export {userRoute}