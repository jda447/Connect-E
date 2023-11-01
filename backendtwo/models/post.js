'use strict'
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Post = sequelize.define('Post', {
  userId: {
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
  }
}, {
  sequelize
})

module.exports = Post

console.log(Post === sequelize.models.Post)
