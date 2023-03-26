const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const postCtrl = require('../controllers/post')

router.post('/addPost', auth, postCtrl.addPost)
router.post('/addPostImage', auth, multer, postCtrl.addPostImage)
router.get('/', auth, postCtrl.getPosts)
router.delete('/', auth, postCtrl.deletePost)

module.exports = router
