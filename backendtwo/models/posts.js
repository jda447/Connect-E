'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {}
  Posts.init({
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    post: {
      type: DataTypes.STRING
    },
    userSeen: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};