const Post = require('../models/post')

exports.addPost = (req, res, next) => {
  console.log(req.body.userId)
  Post.create({
    post: req.body.post,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    profileImage: req.body.profileImage,
    user_id: req.body.userId
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

exports.addPostImage = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  Post.create({
    where: {
      user_id: req.body.user_id
    },
    post: req.body.post,
    imageUrl: url + '/images/' + req.file.filename,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    profileImage: req.body.profileImage,
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
  console.log(req.params.id)
  Post.destroy({
    where: {
      user_id: req.auth.userId,
      post_id: req.params.id
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
