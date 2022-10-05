const User = require('../models/user');
const UserDetails = require('../models/userDetails');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = User.create({
        email: req.body.email,
        password: hash
      }).then(
        () => {
          console.log(user.toJSON());
          res.status(201).json({
            message: 'User added successfully!'
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
  );
};


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

exports.createUser = (req, res, next) => {
  req.body.userDetails = JSON.parse(req.body.userDetails);
  const url = req.protocol + '://' + req.get('host');
	const userDetails = UserDetails.create({
			name: req.body.name,
      position: req.body.position,
      hobbies: req.body.hobbies,
      imageUrl: url + '/images/' + req.file.filename
		}).then(
			() => {
				res.status(201).json(userDetails);
		}).catch(
			(error) => {
				res.status(400).json(error);
		}
	);
}


exports.updateUser = (req, res, next) => {
  let userDetails = req.body || {};
  UserDetails.update({_id: req.params.id}, userDetails)
  .then(    
    (userDetails) => {
      res.status(201).json(userDetails);
    }
  ).catch(
    (error) => {
      res.status(400).json(error);
    }
  )
}


exports.deleteUser = (req, res, next) => {
  User.destroy({_id: req.params.id}).then(
    () => {
      res.status(200).json();
    }
  ).catch(
    (error) => {
      res.status(400).json(error);
    }
  );
};