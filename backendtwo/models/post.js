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
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    post: {
      type: DataTypes.STRING,
      autoIncrement: true
    },
    userSeen_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  sequelize.sync({ alter: true });
  return Post;
};