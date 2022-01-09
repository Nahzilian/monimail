import mysql from 'mysql'

// Mysql db singleton

export default class MySQLDatabase {
    readonly db;
    constructor(host: string,
        user: string,
        password: string,
        database: string) {
            try {
                this.db = mysql.createPool({host, user, password, database})
                console.log("Connected to MySQL")
            } catch (err) {
                console.log(err)
                throw new Error(err)
            }
    }

    getInstance () {
        return this
    }
}