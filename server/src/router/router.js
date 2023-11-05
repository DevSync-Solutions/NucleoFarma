import home from '../controller/home.js'

const router = app => {
    app.use('/', home)
}

export default router