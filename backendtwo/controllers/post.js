const Post = require('../models/post')

exports.addPost = (req, res, next) => {
  Post.create({
    post: req.body.post
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
  Post.findAll().then(
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
  Post.destroy({
    where: {
      post: 'This is my second post'
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
