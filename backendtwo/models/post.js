'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Post extends Model {
  static associate ({ User }) {
    this.belongsTo(User)
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
  },
  seen: {
    type: DataTypes.INTEGER
  },
  seenUserId: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
}, {
  sequelize,
  modelName: 'Post'
})

module.exports = Post
