import { Router } from 'express'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, company, password, password1 } = req.body
    const nameM = name.charAt(0).toUpperCase() + name.slice(1)

    const data = {
      name: nameM,
      email,
      company,
      password,
      password1
    }

    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router