'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  post: {
    type: DataTypes.STRING
  },
  userSeen_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Post'
})

module.exports = Post
