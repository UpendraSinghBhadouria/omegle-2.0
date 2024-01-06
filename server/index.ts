import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import peerRoute from './routes/peer'

dotenv.config();

const app: Application = express()

const port = 8000

app.use(express.json());
app.use(cors());

app.use('/api/peer', peerRoute)


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})