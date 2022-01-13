import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as cookieParser from 'cookie-parser'
import { Token } from 'typescript'
const saltRound = 15

export const encryptPassword = (password: string) => {
    // Async solution

    // return bcrypt.genSalt(saltRound, (err, salt) => {
    //     if(err) throw new Error(err)
    //     bcrypt.hash(password, salt, (err, hash) => {  
    //         if(err) throw new Error(err)
    //         return hash
    //     })
    // })

    // Sync solution
    const salt = bcrypt.genSaltSync(saltRound)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export const isPasswordCorrect = (password: string, hashed: string) => {
    return bcrypt.compare(password, hashed)
}

export function auth(req: Request, res: Response, next) {
    const token = req.headers('refresh-token');
    if (!token) return res.status(401).send('Access Denied');
    try{
        const verified = jwt.verify(token, process.env.TOKEN_KEY)

    }catch (err)
    {
        res.status(400).send('invalid Token')
    }

}


   