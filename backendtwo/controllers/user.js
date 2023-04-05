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
          const token = jwt.sign(
            { userId: user.user_id },
            config.jwtSecret,
            { expiresIn: '24h' })
          res.status(201).json({
            userId: user.user_id,
            token
          })
        }
      ).catch(
        (error) => {
          res.status(401).json({
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
        }).catch(
        (error) => {
          res.status(500).json({
            error
          })
        }
      )
    }).catch(
    (error) => {
      res.status(500).json({
        error
      })
    }
  )
}

exports.getUser = (req, res, next) => {
  User.findAll({
    where: {
      user_id: req.auth.userId
    }
  }).then(
    (user) => {
      res.status(200).json(user)
    }
  ).catch(
    (error) => {
      res.status(400).json(error)
    }
  )
}

exports.updateUser = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  User.findOne({
    where: {
      user_id: req.body.user_id
    }
  }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: ('User not found!')
        })
      }
      user.update({
        where: {
          user_id: req.body.user_id
        },
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        profileImage: url + '/images/' + req.file.filename
      }).then(
        (user) => {
          res.status(200).json(user)
        }).catch(
        (error) => {
          res.status(400).json(error)
          console.log(error)
        }
      )
    }
  )
}

exports.deleteUser = (req, res, next) => {
  User.destroy({
    where: {
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
