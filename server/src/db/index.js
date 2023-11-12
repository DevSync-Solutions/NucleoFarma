import { Sequelize, DataTypes } from 'sequelize'
import { db } from '../config/index.config.js'

const sequelize = new Sequelize(db.name, db.user, db.pass, {
    host: db.host,
    dialect: db.dialect
})

const connectBD = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión a BD con éxito')
    } catch (error) {
        console.log('Error', error)
    }
}

export { connectBD, sequelize, Sequelize, DataTypes }