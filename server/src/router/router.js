import contact from '../controller/contact.js'
import session from '../controller/session.js'

const router = app => {
    app.use('/contacto', contact)
    app.use('/sesion', session)
}

export default router