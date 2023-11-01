const { Post } = require('../models/index.js')

exports.readUpdate = (req, res) => {
  Post.findByPk(1, {
  }).then(read => {
    if (!read) {
      return res.status(404)({
        error: ('Read status not found!')
      })
    } else if (read.hasUser(1)) {
      read.removeUser(1)
    } else {
      read.createUser({
        userId: req.auth.userId,
        postId: req.params.postId
      })
    }
  }).then(
    (read) => {
      res.status(201).json({
        message: 'Success!', read
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

exports.hasRead = (res) => {
  Post.findByPk(parseInt(res.query.postId), {
  }).then(post => {
    if (!post) {
      return res.status(404)
    }
    post.hasUser(parseInt(res.query.userId))
      .then(post => {
        res.status(200).send(post)
      })
  })
}

exports.addPost = (req, res) => {
  console.log(req.body.userId)
  Post.create({
    text: req.body.text,
    userId: req.body.userId
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
      user_id: req.body.user_id
    },
    text: req.body.text,
    imageUrl: url + '/images/' + req.file.filename,
    userId: req.body.user_id
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

exports.getPosts = (res) => {
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
