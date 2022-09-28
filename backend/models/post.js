'use strict';
const {Model} = require('sequelize');

  module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};