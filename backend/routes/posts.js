const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/posts');

router.post('/', auth, multer, postCtrl.addPost);
router.get('/', auth, multer, postCtrl.getPosts);
router.delete('/:id', auth, postCtrl.deletePost);
