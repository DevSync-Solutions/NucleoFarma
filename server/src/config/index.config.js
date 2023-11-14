import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const APIKEY = process.env.APIKEY

const secretKey = process.env.secretKey
const JWT_SECRET = process.env.JWT_SECRET
const BD_PASS_URL = process.env.BD_PASS_URL

const db = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
}

export { PORT, APIKEY, secretKey, db, JWT_SECRET, BD_PASS_URL }