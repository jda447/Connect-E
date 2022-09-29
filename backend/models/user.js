'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  
  User.init({
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
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  sequelize.sync({ alter: true });
  return User;
};