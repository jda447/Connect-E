const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, '4653b720-3b4a-4891-b2f0-c0f55hteq223lk3089')
    const userId = decodedToken.userId
    const errorMsg = { message: 'Invalid User ID' }
    if (req.body.userId && req.body.userId !== userId) {
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
