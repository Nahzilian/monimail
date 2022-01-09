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