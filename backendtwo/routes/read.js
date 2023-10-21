const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const readCtrl = require('../controllers/read')

router.post('/readUpdate/:postId', auth, readCtrl.readUpdate)

module.exports = router
