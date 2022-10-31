const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config.js')

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
          const token = jwt.sign(
            { userId: user.user_id },
            config.jwtSecret,
            { expiresIn: '24h' })
          res.status(200).json({
            userId: user.user_id,
            token
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
  const usertoken = req.headers.authorization
  const token = usertoken.split(' ')
  const decoded = jwt.verify(token[1], config.jwtSecret)
  User.update({
    imageUrl: req.body.imageUrl,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position
  }, {
    where: {
      user_id: decoded.userId
    }
  }).then(
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
  const usertoken = req.headers.authorization
  const token = usertoken.split(' ')
  const decoded = jwt.verify(token[1], config.jwtSecret)
  User.destroy({
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
