import express from 'express'
import { router } from './routes/Router.js'

const server = express()

server.use('/uploads', express.static("./uploads"))

server.use(express.json())

server.use(router)


export { server }