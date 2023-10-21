'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class User extends Model {
  static associate ({ Post }) {
    this.belongsToMany(Post, { through: 'hasRead' })
  }
}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [6, 20]
  },
  profileImage: {
    type: DataTypes.STRING
  },
  firstName: {
    type: DataTypes.STRING,
    isAlpha: true
  },
  lastName: {
    type: DataTypes.STRING
  },
  position: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User'
})

module.exports = User
