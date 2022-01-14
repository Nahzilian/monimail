import { callbackify } from 'util'
import { mysql } from '../app'
// Query for user info

export const getUserById = async (id: string, callback: Function): Promise<any> => {
    const query = `SELECT * FROM users where id ='${id}'`
    return mysql.db.query(query, (err, result, _) => {
        if (err) throw err
        callback(result[0])
    })
}

export const getUsersFromCompany = async (id: string, callback: Function): Promise<any> => {
    const query = `SELECT * FROM users where company_id='${id}'`
    return mysql.db.query(query, (err, result, _) => {
        if (err) throw err
        callback(result)
    })
}

export const getUserByUsername = async (username: string, callback: Function): Promise<any> => {
    const query = `SELECT * FROM users where username='${username}'`
    return mysql.db.query(query, (err, result, _) => {
        if (err) throw err
        callback(result[0])
    })
}

export const getUserByEmail = async (Email: string, callback: Function): Promise<any> => {
    const query = `SELECT * FROM users where email='${Email}'`
    return mysql.db.query(query, (err, result, _) => {
        if (err) throw err
        callback(result[0])
    })
}

export const emailInUse = async (Email: string) => {
    const query = `SELECT * FROM users where email='${Email}'`
    let res:boolean = false
    mysql.db.query(query, async (err, result) => {
        if (err) throw err
        if (result.length != 0) {
            console.log("Email in Use");
            res = true
        }
    })
    return res
}
