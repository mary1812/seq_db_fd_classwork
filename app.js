const express = require('express');
const UserController = require('./controllers/userController');
const app = express();

const bodyParser = express.json(); // data stream -> JSON -> JS object -> req.body

app.use(bodyParser); 

app.get('/users', UserController.getUsers);

app.post('/user')

module.exports = app;