import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors({ origin: 'http://localhost:4000' }))
app.use(morgan('dev'))
app.use(express.json())

export default app