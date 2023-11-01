'use strict'
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const User = sequelize.define('User', {
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
  sequelize
})

module.exports = User

console.log(User === sequelize.models.User)
