import { Router } from 'express'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import UserSchema from '../models/users.model.js'
import users from '../models/users.model.js'
import { Resend } from "resend"
import dotenv from 'dotenv'
// import { Op } from 'sequelize'
dotenv.config()

const router = Router()
const secretKey = process.env.secretKey

// router.post('/registro', async (req, res) => {
//   try {
//     const { name, email, company, cuit, password } = req.body

//     const lowerCaseEmail = email.toLowerCase()
//     const lowerCaseName = name.toLowerCase()
//     const lowerCaseCompany = company.toLowerCase()
//     const hashedPassword = await bcrypt.hash(password, 10)

//     const newUser = {
//       name: lowerCaseName,
//       email: lowerCaseEmail,
//       company: lowerCaseCompany,
//       cuit,
//       password: hashedPassword
//     }

//     await UserSchema.create(newUser)

//     res.status(200).json({ message: 'Usuario creado con éxito' })         

//   } catch (error) {
//     res.status(500).json({ error: 'Error al registrar al usuario' })
//   }
// })

// router.post('/verificar-email-cuit', async (req, res) => {
//   try {
//     const { email, cuit } = req.body

//     const lowerCaseEmail = email.toLowerCase()

//     const userEmail = await UserSchema.findOne({ where: { email: lowerCaseEmail } })
//     const userCuit = await UserSchema.findOne({ where: { cuit } })

//     const responseData = {
//       emailAlreadyRegistered: userEmail !== null,
//       cuitAlreadyRegistered: userCuit !== null
//     }

//     res.json(responseData)

//   } catch (error) {
//     res.status(500).json({ error: 'Error al verificar los datos' })
//   }
// })

// function generateRandomToken(length) {
//   const alphanumericCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let token = ''

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length)
//     token += alphanumericCharacters.charAt(randomIndex)
//   }

//   return token
// }

// router.post('/ingreso', async (req, res) => {
//   try {
//     const { cuit, password } = req.body

//     // const user = await UserSchema.findOne({ where: { cuit } })
//     const user = users.find(user => user.cuit === cuit)

//     if (!user) {
//       return res.status(401).json({ error: 'Usuario no encontrado' });
//     }

//     // const passwordMatch = await bcrypt.compare(password, user.password)

//     // if (!passwordMatch) {
//     //   return res.status(401).json({ error: 'Contraseña incorrecta' });
//     // }

//     if (password !== user.password) {
//       return res.status(401).json({ error: 'Contraseña incorrecta' });
//     }

//     const token = generateRandomToken(10)
//     // const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '15m' })
//     // console.log('Token generado:', jwt.decode(token))

//     res.setHeader('Authorization', `Bearer ${token}`)
//     res.status(200).json({ userId: user.id })     

//   } catch (error) {
//     res.status(500).json({ error: 'Error al iniciar sesión' })
//   }
// })

const APIKEY = process.env.APIKEY
const resend = new Resend(APIKEY)
const BD_PASS_URL = process.env.BD_PASS_URL


router.post('/solicitar-recuperacion', async (req, res) => {
  try {
    const { email } = req.body

    const lowerCaseEmail = email.toLowerCase()

    //const user = await UserSchema.findOne({ where: { email: lowerCaseEmail }})
    const user = users.find(user => user.email === lowerCaseEmail)

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' })
    }

    // const resetPasswordToken = generateRandomToken(20)
    // const expirationTime = 3600000

    // user.resetPasswordToken = resetPasswordToken
    // user.resetPasswordExpires = new Date(Date.now() + expirationTime).toISOString()
    // await user.save()

    // const data = {
    //   tokenPass: resetPasswordToken,
    // }

    // const emailResponse = await resend.emails.send({
    //   from: "Web NucleoFarma <onboarding@resend.dev>",
    //   to: [lowerCaseEmail],
    //   subject: `Restablecer contraseña NucleoFarma.`,
    //   html: `Restablecer contraseña NucleoFarma.<br><p>Si solicitaste un cambio de contraseña, por favor haga click en el siguiente enlace:<br>https://nucleofarma.com.ar/restablecer/${resetPasswordToken}`,
    // })

    const emailResponse = await resend.emails.send({
      from: "Web NucleoFarma <onboarding@resend.dev>",
      to: [lowerCaseEmail],
      subject: `Restablecer contraseña NucleoFarma.`,
      html: `Restablecer contraseña NucleoFarma.<br><p>El usuario ${lowerCaseEmail}, cuit: ${user.cuit} solicita un cambio de contraseña. Ponerse en contacto con soporte para generar una nueva o use la predeterminada "12345678".`,
    })

    // res.status(200).json({ data, emailResponse })      
    res.status(200).json({ emailResponse })

  } catch (error) {
    res.status(500).json({ error })
  }
})

// router.post('/verificar-email', async (req, res) => {
//   try {
//     const { email } = req.body

//     const lowerCaseEmail = email.toLowerCase()

//     const existingUser = await UserSchema.findOne({ where: { email: lowerCaseEmail }})
    
//     const responseData = {
//       isEmailRegistered: existingUser !== null
//     }
    
//     res.json(responseData)

//   } catch (error) {
//     res.status(500).json({ error: 'Error al verificar el correo' })
//   }
// })

// router.post('/restablecer/:tokenPass', async (req, res) => {
//   try {
//     const { newPassword } = req.body
//     const { tokenPass } = req.params

//     const user = await UserSchema.findOne({
//       where: {
//         resetPasswordToken: tokenPass,
//         resetPasswordExpires: { [Op.gt]: new Date() },
//       }
//     })

//     if (!user || user.resetPasswordToken !== tokenPass) {
//       return res.status(400).json({ message: 'Token inválido o expirado.' })
//     }

//     user.password = await bcrypt.hash(newPassword, 10)
//     user.resetPasswordToken = null
//     user.resetPasswordExpires = null
//     await user.save()

//     res.status(200).json({ message: 'Contraseña restablecida con éxito.' })
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

export default router