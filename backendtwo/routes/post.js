const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const postCtrl = require('../controllers/post')

router.post('/addPost', auth, multer, postCtrl.addPost)
router.post('/addPostImage', auth, multer, postCtrl.addPostImage)
// router.put('/:id', auth, postCtrl.addLike)
router.get('/', auth, postCtrl.getPosts)
router.delete('/:id', auth, postCtrl.deletePost)

module.exports = router
