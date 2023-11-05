import { Router } from 'express'
import { Resend } from "resend"
import dotenv from 'dotenv'
dotenv.config()

const router = Router()

const APIKEY = process.env.APIKEY
const resend = new Resend(APIKEY)

router.get('/', async (req, res) => {
  try {
      const home = "home"
              
      res.json(home)

  } catch (error) {
      res.status(500).json({ error: 'Error al obtener home' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body
    const nameM = name.charAt(0).toUpperCase() + name.slice(1)

    const data = await resend.emails.send({
      from: "Web NucleoFarma <onboarding@resend.dev>",
      to: ["correo@info.com.ar"],
      subject: `${nameM} contacta vía web NucleoFarma`,
      html: `Contacto realizado por <strong>${email}</strong><br><p>Mensaje: ${message}`,
    })
    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router