const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;