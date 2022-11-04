const jwt = require('jsonwebtoken')
const config = require('../config.js')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, config.jwtSecret)
    const userId = decodedToken.userId
    const errorMsg = { message: 'Invalid User ID' }
    if (!req.body.userId || (req.body.userId && req.body.userId !== userId)) {
      throw errorMsg
    } else {
      next()
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    })
  }
}
