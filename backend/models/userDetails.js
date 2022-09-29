'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {}
  
  UserDetails.init({
    imageUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    hobbies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetails',
  });
  return UserDetails;
};