import contact from '../controller/contact.js'
import session from '../controller/session.js'
// import login from '../controller/login.js'

const router = app => {
    app.use('/contact', contact)
    app.use('/session', session)
    // app.use('/login', login)
}

export default router