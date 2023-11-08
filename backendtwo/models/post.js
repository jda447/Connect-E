'use strict'
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Post = sequelize.define('Post', {
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
