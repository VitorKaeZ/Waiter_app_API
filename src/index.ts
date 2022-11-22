import mongoose from "mongoose";
import { server } from "./server.js";
import dotenv from 'dotenv'
dotenv.config()

const serverDb = process.env.DB_SERVER
const database = process.env.DATABASE
const port = process.env.PORT

mongoose.connect(`mongodb://${serverDb}/${database}`)
.then(() => {
    server.listen(port, () => console.log(`🚀 Server Running on https://localhost:${port}`))
})
.catch(err => {
    console.error(err)
})