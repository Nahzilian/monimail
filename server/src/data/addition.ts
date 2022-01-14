import { mysql } from '../app'

export const createNewUser = async (id: string, firstname: string, lastname: string, email:string, username:string, password:string, role:string, company:string, callback: Function): Promise<any> => {
    const insert = "INSERT INTO users VALUES (?,?,?,?,?,?,?,?,'no')";
    let sqlport = require('mysql');
    const query = sqlport.format(insert, [id,firstname, lastname, email, username, password, role, company])
    mysql.db.query(query, (err, results) => {
        if (err) throw err
        callback();
    })
    callback();
}