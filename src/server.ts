import express from 'express'
import { router } from './routes/Router.js'
import cors from 'cors'

const server = express()

server.use(cors())

server.use('/uploads', express.static("./uploads"))

server.use(express.json())

server.use(router)


export { server }
