const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const userCtrl = require('../controllers/user')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.put('/', auth, multer, userCtrl.updateUser)
router.delete('/', auth, userCtrl.deleteUser)

module.exports = router
