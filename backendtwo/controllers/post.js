const Post = require('../models/post')

exports.addPost = (req, res, next) => {
  console.log(req.body)
  console.log(req.file)
  const url = req.protocol + '://' + req.get('host')
  Post.create({
    where: {
      user_id: req.body.user_id
    },
    post: req.body.post,
    imageUrl: url + '/images/' + req.file.filename,
    user_id: req.body.user_id
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
  Post.destroy({
    where: {
      user_id: req.body.userId,
      post_id: req.body.post_id
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
