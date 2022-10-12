'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    post: {
      type: DataTypes.STRING,
      autoIncrement: true
    },
    userSeen: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};