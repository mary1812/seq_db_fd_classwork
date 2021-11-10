const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;

    const newTask = await Task.create(body);

    res.send(newTask);
  } catch (err) {
    next(err);
  }
}

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();

    res.send(tasks);
  } catch (err) {
    next(err);
  }
}