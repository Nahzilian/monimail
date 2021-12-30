import mongoose, { ConnectOptions } from 'mongoose'

const opts: ConnectOptions = { useNewUrlParser: true } as ConnectOptions

const callback = () => console.log("Connected to MongoDB")

export const connectMongoDB = (connStr: string) => {
    mongoose.connect(connStr, opts, callback)
}