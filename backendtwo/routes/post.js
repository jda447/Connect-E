const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const postCtrl = require('../controllers/post')

router.post('/addPost', auth, multer, postCtrl.addPost)
router.post('/addPostImage', auth, multer, postCtrl.addPostImage)
router.get('/', auth, postCtrl.getPosts)
router.get('/hasRead/:postId/:userId', postCtrl.hasRead)
router.post('/readUpdate/:postId/:userId', postCtrl.readUpdate)
router.delete('/:id', auth, postCtrl.deletePost)

module.exports = router
