const postRouter = require('express').Router();
const PostController = require('../controllers/postController');


postRouter.post('/:userId', PostController.createPosts);
postRouter.get('/:userId', PostController.getUserPosts);

module.exports = postRouter;