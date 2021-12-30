import mysql from 'mysql'

export const connectMySQL = (host: string, user: string, password: string, database: string) => {

    const conn = mysql.createConnection({
        host, user, password, database
    })
    
    return conn.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL")
    })
}