'use strict'
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.POSTGRES_URI)
// const User = require('./user')

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING
  },
  imageUrl: {
    type: DataTypes.STRING,
    isUrl: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  position: {
    type: DataTypes.STRING
  },
  profileImage: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Post'
})
// Post.belongsToMany(User, { through: 'hasRead' })
// User.belongsToMany(Post, { through: 'hasRead' })

module.exports = Post
