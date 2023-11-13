import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserSchema from '../models/users.model.js'
import { Resend } from "resend"
import dotenv from 'dotenv'
dotenv.config()

const router = Router()
const secretKey = process.env.secretKey

router.post('/registro', async (req, res) => {
  try {
    const { name, email, company, cuit, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      name,
      email,
      company,
      cuit,
      password: hashedPassword
    }

    await UserSchema.create(newUser)

    res.status(200).json({ message: 'Usuario creado con éxito' })         

  } catch (error) {
    res.status(500).json({ error: 'Error al registrar al usuario' })
  }
})

router.post('/verificar-email-cuit', async (req, res) => {
  try {
    const { email, cuit } = req.body

    const userEmail = await UserSchema.findOne({ where: { email } })
    const userCuit = await UserSchema.findOne({ where: { cuit } })

    const responseData = {
      emailAlreadyRegistered: userEmail !== null,
      cuitAlreadyRegistered: userCuit !== null
    }

    res.json(responseData)

  } catch (error) {
    res.status(500).json({ error: 'Error al verificar los datos' })
  }
})

router.post('/ingreso', async (req, res) => {
  try {
    const { cuit, password } = req.body

    const user = await UserSchema.findOne({ where: { cuit } })

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '15m' })
    // console.log('Token generado:', jwt.decode(token))

    res.setHeader('Authorization', `Bearer ${token}`)
    res.status(200).end()        

  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
})

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