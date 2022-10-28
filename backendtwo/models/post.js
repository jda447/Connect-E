'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Post extends Model {
  static associate ({ User }) {
    this.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
  }
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
