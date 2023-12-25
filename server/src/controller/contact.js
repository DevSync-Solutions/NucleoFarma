import { Router } from 'express'
import { Resend } from "resend"
import UserSchema from '../models/users.model.js'
import dotenv from 'dotenv'
dotenv.config()

const router = Router()

const APIKEY = process.env.APIKEY
const resend = new Resend(APIKEY)

router.post('/', async (req, res) => {
  try {
    const { userId, name, email, message, contactType } = req.body
    let company = ''

    const lowerCaseEmail = email.toLowerCase()

    if (userId) {
      const user = await UserSchema.findOne({ where: { id: userId } })
      if (user) {
        company = ", Proveedor (" + user.company.charAt(0).toUpperCase() + user.company.slice(1) + ")"
      }
    }
    
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
      to: ["info@nucleofarmaweb.com.ar"],
      subject: `${nameM}${company} contacta para ${contact} NucleoFarma vía Web.`,
      html: `Contacto realizado por <strong>${email}${company}</strong> con el fin de ${contact} Nucleo Farma.<br><p>Mensaje: ${message}`,
    })
    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router