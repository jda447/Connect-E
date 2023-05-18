const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const likeCtrl = require('../controllers/like')

router.post('/:id', auth, likeCtrl.addLike)
router.get('/', auth, likeCtrl.getLikes)

module.exports = router
