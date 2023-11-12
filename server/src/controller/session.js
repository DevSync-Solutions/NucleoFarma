import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserSchema from '../models/users.model.js'
import dotenv from 'dotenv'
dotenv.config()

const router = Router()
const secretKey = process.env.secretKey

router.post('/registro', async (req, res) => {
  try {
    const { name, email, company, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      name,
      email,
      company,
      password: hashedPassword
    }

    await UserSchema.create(newUser)

    res.status(200).json({ message: 'Usuario creado con éxito' })         

  } catch (error) {
    res.status(500).json({ error: 'Error al registrar al usuario' })
  }
})

router.post('/ingreso', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await UserSchema.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '10m' })

    res.status(200).json({ token })         

  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
})

router.get('/documentacion', verificarToken, (req, res) => {

  res.json({ mensaje: 'Acceso permitido' })
})

function verificarToken(req, res, next) {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(403).json({ mensaje: 'Token no proporcionado' })
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensaje: 'Token inválido' })
    }
    
    req.usuario = decoded
    next()
  })
}

export default router