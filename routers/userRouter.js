const userRouter = require('express').Router();
const UserController = require('../controllers/userController');

// GET http://localhost:3000/api/users
userRouter.get('/', UserController.getUsers);

userRouter.post('/', UserController.createUser);

userRouter.patch('/:id', UserController.updateUser);

userRouter.delete('/:id', UserController.deleteUser);

module.exports = userRouter;