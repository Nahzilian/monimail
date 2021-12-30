import * as dotenv from 'dotenv'
import { connectMongoDB } from './mongo'
import { connectMySQL } from './mysql'


dotenv.config();
const connStr: string = process.env.MONGO_DB
const host: string = process.env.MYSQL_HOST
const user: string = process.env.MYSQL_USER
const password: string = process.env.MYSQL_PASS
const database: string = process.env.MYSQL_DB

export default function configs (){
    connectMongoDB(connStr)
    connectMySQL(host, user, password, database)
}
