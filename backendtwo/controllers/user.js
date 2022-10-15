const User = require('../models/user')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      User.create({
        email: req.body.email,
        password: hash
      }).then(
        (user) => {
          res.status(201).json({
            message: 'User added successfully!', user
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
  ).catch(
    (error) => {
      res.status(500).json({
        error
      })
    }
  )
}

exports.login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: ('User not found!')
        })
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: ('Incorrect password!')
            })
          }
          res.status(200).json({
            userId: user._id,
            token: 'token'
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
  ).catch(
    (error) => {
      res.status(500).json({
        error
      })
    }
  )
}

exports.updateUser = (req, res, next) => {
  const user = req.body || {}
  User.update({ _id: req.params.id }, user)
    .then(
      (user) => {
        res.status(201).json(user)
      }
    ).catch(
      (error) => {
        res.status(400).json(error)
      }
    )
}

exports.deleteUser = (req, res, next) => {
  User.destroy({ _id: req.params.id }).then(
    () => {
      res.status(200).json()
    }
  ).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}
