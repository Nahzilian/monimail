import express, {Request, Response} from 'express'
import { getUserById, getUserByUsername } from '../data/query';
import {isPasswordCorrect} from '../modules/authentication'

const userRoute = express.Router();

userRoute.post("/login", async (req: Request, res: Response) => {
    let username: string = req.body.username
    let password: string = req.body.password

    getUserByUsername(username, async (data) => {
        if(!data) return res.status(400).send("User does not exist")
        let check = await isPasswordCorrect(password, data.password)
        if(!check) return res.status(400).send("Incorrect password")
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