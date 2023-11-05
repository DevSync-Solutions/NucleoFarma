import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const home = "home"
                
        res.json(home)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener home' })
    }
})

export default router