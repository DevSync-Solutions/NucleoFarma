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
const BD_PASS_URL = process.env.BD_PASS_URL
const JWT_SECRET = process.env.JWT_SECRET

router.post('/solicitar-recuperacion', async (req, res) => {
  try {
    const { email } = req.body

    const user = await UserSchema.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' })
    }

    const resetPasswordToken = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    user.resetPasswordToken = resetPasswordToken
    user.resetPasswordExpires = new Date(Date.now() + 3600000)
    await user.save()

    const data = await resend.emails.send({
      from: "Web NucleoFarma <onboarding@resend.dev>",
      to: [email],
      subject: `Restablecer contraseña NucleoFarma.`,
      html: `Restablecer contraseña NucleoFarma.<br><p>Si solicitaste un cambio de contraseña, por favor haga click en el siguiente enlace: <a href="${BD_PASS_URL}/restablecer-contraseña/${resetPasswordToken}">${BD_PASS_URL}/restablecer-contraseña/${resetPasswordToken}</a>`,
    })

    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/verificar-email', async (req, res) => {
  try {
    const { email } = req.body

    const existingUser = await UserSchema.findOne({ email })

    const responseData = {
      isEmailRegistered: existingUser !== null
    }

    res.json(responseData)

  } catch (error) {
    res.status(500).json({ error: 'Error al verificar el correo' })
  }
})

router.post('/restablecer-contraseña', async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body

    const user = await UserSchema.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: new Date() },
    })

    if (!user) {
      return res.status(400).json({ message: 'Token inválido o expirado.' })
    }

    user.password = await bcrypt.hash(newPassword, 10)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    res.status(200).json({ message: 'Contraseña restablecida con éxito.' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default router