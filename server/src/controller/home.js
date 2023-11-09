import { Router } from 'express'
import { Resend } from "resend"
import dotenv from 'dotenv'
dotenv.config()

const router = Router()

const APIKEY = process.env.APIKEY
const resend = new Resend(APIKEY)

router.post('/', async (req, res) => {
  try {
    const { name, email, message, contactType } = req.body
    const nameM = name.charAt(0).toUpperCase() + name.slice(1)

    let contact = ''
    const contactTitle = contactType.split(' ')
    if (contactTitle[contactTitle.length -1] === "trabajar") {
      contact = 'trabajar en'
    } else {
      contact = 'comunicarse con'
    }

    const data = await resend.emails.send({
      from: "Web NucleoFarma <onboarding@resend.dev>",
      to: ["correo@info.com.ar"],
      subject: `${nameM} contacta para ${contact} NucleoFarma vía Web.`,
      html: `Contacto realizado por <strong>${email}</strong> con el fin de ${contact} Nucleo Farma.<br><p>Mensaje: ${message}`,
    })
    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router