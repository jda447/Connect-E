'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Read extends Model {}

Read.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  postId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Read'
})

module.exports = Read

console.log(Read === sequelize.models.Read)
