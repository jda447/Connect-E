const { Post } = require('../models/index')

exports.hasRead = (req, res) => {
  Post.findByPk((req.query.postId), {
  }).then(post => {
    if (!post) {
      return res.status(404)
    }
    post.hasUser(parseInt(req.query.userId))
      .then(post => {
        res.status(200).send(post)
      })
  })
}

exports.readUpdate = (req, res) => {
  Post.findByPk((req.query.postId), {
  }).then(post => {
    if (!post) {
      return res.status(404)
    }
    if (post.hasUser(parseInt(req.query.userId))) {
      post.removeUser(parseInt(req.query.userId))
    } else {
      post.addUser(parseInt(req.query.userId))
    }
  }).then(post => {
    res.sendStatus(200).send(post)
  }).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}

exports.addPost = (req, res) => {
  Post.create({
    text: req.body.text,
    UserId: req.body.userId
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

exports.addPostImage = (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  Post.create({
    where: {
      id: req.body.userId
    },
    text: req.body.text,
    imageUrl: url + '/images/' + req.file.filename,
    UserId: req.auth.userId
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

exports.getPosts = (req, res) => {
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

exports.deletePost = (req, res) => {
  console.log(req.params.id)
  Post.destroy({
    where: {
      id: req.params.id,
      UserId: req.auth.userId
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
