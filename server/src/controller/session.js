import { Router } from 'express'
import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const router = Router()
const secretKey = process.env.secretKey

router.post('/register', async (req, res) => {
  try {
    const { name, email, company, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const data = {
      name,
      email,
      company,
      password: hashedPassword
    }
    
    // const [result] = await pool.execute(
    //   'INSERT INTO users (name, email, company, password) VALUES (?, ?, ?, ?)',
    //   [name, email, company, hashedPassword]
    // )

    // res.status(200).json({ message: 'Usuario registrado exitosamente' })
    res.status(200).json({ data })         

  } catch (error) {
    res.status(500).json({ error: 'Error al registrar al usuario' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    console.log(email, password)

    // const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email])

    // if (rows.length === 0) {
    //   return res.status(401).json({ error: 'Usuario no encontrado' });
    // }

    // const user = rows[0]

    // const passwordMatch = await bcrypt.compare(password, user.password)

    // if (!passwordMatch) {
    //   return res.status(401).json({ error: 'Contraseña incorrecta' })
    // }

    // const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '10m' })

    // res.status(200).json({ token })         
    res.status(200).json({ message: 'Inicio de sesión con éxito' })         

  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
})

// router.get('/recurso_protegido', verificarToken, (req, res) => {

//   res.json({ mensaje: 'Acceso permitido' })
// })

// function verificarToken(req, res, next) {
//   const token = req.headers['authorization']

//   if (!token) {
//     return res.status(403).json({ mensaje: 'Token no proporcionado' })
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ mensaje: 'Token inválido' })
//     }
    
//     req.usuario = decoded
//     next()
//   })
// }

export default router