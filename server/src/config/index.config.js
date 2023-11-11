import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const APIKEY = process.env.APIKEY

const secretKey = process.env.secretKey

db = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
}

export default { PORT, APIKEY, secretKey, db }