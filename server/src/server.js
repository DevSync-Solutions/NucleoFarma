import app from './app.js'
import router from './router/router.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

router(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})