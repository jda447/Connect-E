'use strict'
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.POSTGRES_URI)
// const Post = require('./post')

const User = sequelize.define('User', {
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
// User.belongsToMany(Post, { through: 'hasRead' })
// Post.belongsToMany(User, { through: 'hasRead' })

module.exports = User
