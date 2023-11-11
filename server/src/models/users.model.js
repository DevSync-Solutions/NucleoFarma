import { DataTypes, Sequelize, sequelize } from '../db/index.js'

const UserSchema = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'users'
})

// UserSchema.sync({ force: true })

export default UserSchema