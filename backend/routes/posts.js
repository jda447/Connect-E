const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/posts');

router.post('/', auth, postCtrl.addPost);
router.get('/', auth, postCtrl.getPosts);
router.delete('/:id', auth, postCtrl.deletePost);
