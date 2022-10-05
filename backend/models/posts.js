'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {}
  
  Posts.init({
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  sequelize.sync({ alter: true });
  return Posts;
};