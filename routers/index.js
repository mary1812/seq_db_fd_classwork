const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

// http://localhost:3000/api/users
router.get('/users', UserController.getUsers);

router.post('/user', UserController.createUser);

router.patch('/user/:id', UserController.updateUser);

router.delete('/user/:id', UserController.deleteUser);

module.exports = router;