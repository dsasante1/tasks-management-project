const express = require('express');
const api = express.Router();
const users = require('../../routes/user.routes');
const tasks = require('../../routes/task.routes');
// const books = require('../../routes/book')

api.get('/', (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'Welcome to My Tasks App API',
  })
);

api.use('/users', users);
api.use('/tasks', tasks);

module.exports = api;

