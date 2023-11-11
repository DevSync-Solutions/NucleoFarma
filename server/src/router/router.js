import contact from '../controller/contact.js'
import register from '../controller/register.js'
// import login from '../controller/login.js'

const router = app => {
    app.use('/contact', contact)
    app.use('/register', register)
    // app.use('/login', login)
}

export default router