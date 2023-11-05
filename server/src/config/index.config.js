import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const APIKEY = process.env.APIKEY

export default { PORT, APIKEY }