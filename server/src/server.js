import app from './app.js'
import router from './router/router.js'
import dotenv from 'dotenv'
// import { connectBD } from './db/index.js'

dotenv.config()

const PORT = process.env.PORT

// connectBD()

router(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})