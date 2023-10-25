const Post = require('../models/post')
const User = require('../models/user')

exports.hasRead = (req, res) => {
  const postId = req.params.id
  const userId = req.auth.userId
  console.log(postId)
  console.log(userId)
  Post.findByPk(606, {
    include: [{
      model: User,
      through: { hasRead: [] }
    }]
  }).then(post => {
    if (!post) {
      return res.status(404)
    }
    post.hasUser(userId)
      .then(read => {
        res.status(200).send(read)
      })
  })
}

exports.addPost = (req, res, next) => {
  console.log(req.body.userId)
  Post.create({
    text: req.body.text,
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
    text: req.body.text,
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
      id: req.params.id,
      user_id: req.auth.userId
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
