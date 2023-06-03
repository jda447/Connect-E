'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Like extends Model {
  static associate ({ Post }) {
    this.belongsTo(Post)
  }
}

Like.init({
  like_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  user_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Like'
})

module.exports = Like
