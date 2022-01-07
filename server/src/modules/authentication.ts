import * as bcrypt from 'bcrypt'

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