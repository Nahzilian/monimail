import express, {Request, Response} from 'express';
import { getUserById, getUserByUsername } from '../data/query';
import {isPasswordCorrect, encryptPassword} from '../modules/authentication';
import { mysql } from '../app';
import { generateAccessToken } from '../modules/access';
import * as uuid from "uuid";

const userRoute = express.Router();
const registerRoute = express.Router();
// Sign up

registerRoute.post("/register", async (req:Request, res:Response) => {
  //add data to database
  try {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let username = req.body.username
    let pass = req.body.password
    let role = req.body.role
    let company = req.body.companyid

    const password = await encryptPassword(pass)
    const sqlport = require('mysql')
    //connect to db
    mysql.db.getConnection( async (error, connection) => {
      if (error) throw (error)
      const search = "SELECT * FROM users WHERE email=?"
      const searchquery = sqlport.format(search, [email])
      //check if data exists already
      //query to add into db
      await connection.query (searchquery, async (err, results) => {
        if (err) throw (err)
        if (results.length != 0 ) {
          connection.release()
          res.sendStatus(409).json({"msg":"User already exists"})
        }
        else {
          const guid: string = uuid.v4();
          const insert = "INSERT INTO users VALUES (?,?,?,?,?,?,?,?,'no')";
          const insertquery = sqlport.format(insert, [guid,firstname, lastname, email, username, password, role, company])
          await connection.query (insertquery, (err, results) => {
            connection.release()
            if (err) throw (err)
            //create token
            //send information back
            getUserByUsername(username, async (data) => {
              if(!data) return res.status(400).send("User does not exist")
              console.log('---Generating Access Token')
              const token = await generateAccessToken(email)
              console.log(token)
              res.json({accessToken: token, data})
          })
          })
        }
      })
    })
  } catch(error) {
    console.log(error);
    return res.json({status:'error'})
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
        if(!data) return res.status(400).send("User does not exist")
        let check = await isPasswordCorrect(password, data.password)
        if(!check) return res.status(400).send("Incorrect password")
        // Give token to user
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

export {userRoute, registerRoute}