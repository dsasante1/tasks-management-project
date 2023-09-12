const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middleware');
const { checkTaskInput } = require('../middlewares/validation.middleware');


const {
  createTask,
  fetchAllTasks,
  fetchTaskByUser,
  updateTask,
  completeTask
} = require('../controllers/task.controller');


const { checkIfIdExists } = require('../middlewares/user.middleware');  
const { checkValidTask } = require('../middlewares/task.middleware');

router.post('/', checkToken, checkTaskInput, createTask);
router.get('/', fetchAllTasks);
router.get('/user/:id', checkIfIdExists, fetchTaskByUser);
router.put('/:id', checkToken, checkTaskInput, checkValidTask, updateTask);
router.put('/:id', checkToken, checkValidTask, completeTask)

module.exports = router;
