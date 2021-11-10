const postRouter = require('express').Router();
const PostController = require('../controllers/postController');

postRouter.get('/', PostController.getPosts);
postRouter.post('/:userId', PostController.createPosts);

module.exports = postRouter;