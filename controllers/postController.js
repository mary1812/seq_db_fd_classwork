const { Post, User } = require('../models');

module.exports.deletePosts = async (req, res, next) => {
  try {
    const { params: { userId }, } = req;

    const user = await User.findByPk(userId);
    const userPosts = await user.getPosts();
    const deletedItems = await Post.destroy({
      where: {
        userId: user.id
      }
    })

    res.send(userPosts);
  } catch (error) {
    next(error)
  }
}

module.exports.createPosts = async (req, res, next) => {
  try {
    const { body, params: { userId } } = req;

    const userInstance = await User.findByPk(userId);

    const newPost = await userInstance.createPost(body);

    res.send(newPost);
  } catch (error) {
    next(error);
  }
}

module.exports.getUserPosts = async (req, res, next) => {
  try {
    const { params: { userId } } = req;

    const user = await User.findByPk(userId);
    const userPosts = await user.getPosts();
    const userWithPosts = {
      user,
      userPosts
    };

    res.send(userWithPosts);
  } catch (error) {
    next(error)
  }
}