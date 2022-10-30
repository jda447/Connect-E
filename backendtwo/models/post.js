'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Post extends Model {
  static associate ({ User }) {
    this.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
  }
}

Post.init({
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  post: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Post'
})

module.exports = Post
