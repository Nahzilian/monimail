import * as dotenv from 'dotenv'
import { connectMongoDB } from './mongo'
import MySQLDatabase from './mysql'
import { sgConfig } from './sendgrid'

dotenv.config();
const connStr: string = process.env.MONGO_DB
const host: string = process.env.MYSQL_HOST
const user: string = process.env.MYSQL_USER
const password: string = process.env.MYSQL_PASS
const database: string = process.env.MYSQL_DB
const sgAPI: string = process.env.SEND_GRID_API

export const secret: string = process.env.SECRET

export default function configs(): MySQLDatabase {
    connectMongoDB(connStr)
    // connectMySQL(host, user, password, database)
    sgConfig(sgAPI)
    // testMail()
    let sqldb = new MySQLDatabase(host, user, password, database)
    return sqldb
}
