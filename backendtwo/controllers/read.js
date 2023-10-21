const Read = require('../models/read')

exports.readUpdate = (req, res) => {
  console.log(req.params.postId)
  console.log(req.auth.userId)
  Read.create({
    userId: req.auth.userId,
    postId: req.params.postId
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
