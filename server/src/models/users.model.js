// import { DataTypes, sequelize } from '../db/index.js'

// const UserSchema = sequelize.define('user', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     company: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     cuit: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         len: [11, 11],
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     resetPasswordToken: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     resetPasswordExpires: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//   }, {
//     createdAt: true,
//     updatedAt: true,
//     tableName: 'users'
// })

// // UserSchema.sync({ force: true })

const users = [
    { id: 1, name: 'Jeremias', cuit: '30709098191', password: '12345678', email: 'soporte@nucleofarmaweb.com.ar', company: 'Nucleo Farma' },
    { id: 2, name: 'RRHH', cuit: '01234567890', password: '12345678', email: 'ndiaz@nucleofarmaweb.com.ar', company: 'Nucleo Farma' }
]

export default users

// export default UserSchema