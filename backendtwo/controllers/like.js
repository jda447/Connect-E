const Like = require('../models/like')

exports.addLike = (req, res, next) => {
  Like.findOrCreate({
    where: {
      user_id: req.auth.userId,
      post_id: req.params.id
    },
    defaults: {
      user_id: req.auth.userId,
      post_id: req.params.id
    }
  }).then(
    () => {
      res.status(200).json()
    }).catch(
    (error) => {
      res.status(400).json(error)
      console.log(error)
    }
  )
}

exports.getLikes = (req, res, next) => {
  Like.findAll({
    where: {
      post_id: 568
    }
  }).then(
    (like) => {
      res.status(200).json(like)
    }
  ).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}
