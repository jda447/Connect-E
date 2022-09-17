const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = User.create({
        email: req.body.email,
        password: hash
      });
      console.log(user.toJSON());
      }
      ).catch(
      (error) => {
        res.status(500).json({
        error: error
      });
    }
  );
};

// The findOne method obtains the first entry it finds (that fulfills the optional query options, if provided).

// const user = await User.findOne({ where: { email: req.body.email} });
// if (user === null) {
//   console.log('Not found!');

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if (!user) {
      return res.status(401).json({
        error: new Error('User not found!')
      });
    }
    bcrypt.compare(req.body.password, user.password).then(
      (valid) => {
        if (!valid) {
          return res.status(401).json({
          error: new Error('Incorrect password!')
          });
        }
        const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
          res.status(200).json({
            userId: user._id,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}