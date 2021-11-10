const express = require('express');
const router = express.Router();

const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');

router.use('/posts', postRouter);
router.use('/users', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;