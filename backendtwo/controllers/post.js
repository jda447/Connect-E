const Post = require('../models/post')
const jwt = require('jsonwebtoken')
const config = require('../config.js')

exports.addPost = (req, res, next) => {
  const usertoken = req.headers.authorization
  const token = usertoken.split(' ')
  const decoded = jwt.verify(token[1], config.jwtSecret)
  Post.create({
    post: req.body.post,
    user_id: decoded.userId
  },
  {
    where: {
      user_id: decoded.userId
    }
  }).then(
    (post) => {
      res.status(201).json({
        message: 'Post added successfully!', post
      })
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error
      })
    }
  )
}

exports.getPosts = (req, res, next) => {
  Post.findAll({
  }).then(
    (post) => {
      res.status(200).json(post)
    }
  ).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}

exports.deletePost = (req, res, next) => {
  const usertoken = req.headers.authorization
  const token = usertoken.split(' ')
  const decoded = jwt.verify(token[1], config.jwtSecret)
  Post.destroy({
    where: {
      user_id: decoded.userId
    }
  }).then(
    () => {
      res.status(200).json()
    }).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}
