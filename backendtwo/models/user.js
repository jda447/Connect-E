'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  
  User.init({
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
    imageUrl: {
      type: DataTypes.STRING,
      isUrl: true
    },
    name: {
      type: DataTypes.STRING,
      isAlpha: true
    },
    position: {
      type: DataTypes.STRING
    },
    hobbies: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  sequelize.sync({ alter: true });
  return User;
};