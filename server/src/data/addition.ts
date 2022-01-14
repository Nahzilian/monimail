import { mysql } from '../app'

export const createNewUser = async (id: string, firstname: string, lastname: string, email:string, username:string, password:string, role:string, company:string, callback: Function): Promise<any> => {
    const query = `insert into users (id,first_name,last_name,email,username,password,role,company_id,verified)
    VALUES ("${id}","${firstname}", "${lastname}", "${email}", "${username}", "${password}", "${role}", "${company}", "no");`;
    mysql.db.query(query, (err, results) => {
        if (err) throw err
        callback(results);
    })
}