const {
  makeTask,
  getAllTasks,
  getTaskByUser,
  editATask,
  changeTaskState,
} = require('../services/task.services');

/**
 * Creates a task
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const createTask = async (req, res, next) => {
  try {
    const { id } = req.user;
    const response = await makeTask(req.body, id);
    return res.status(response.code).json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Fetches all tasks
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const fetchAllTasks = async (req, res, next) => {
  try {
    const result = await getAllTasks();
    return res.status(result.code).json(result);
  } catch (error) {
    return next(error);
  }
};

/**
 * Gets all tasks by a user
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const fetchTaskByUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const response = await getTaskByUser(id);
    return res.status(response.code).json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * change the details of a task
 * @param {Request} req
 * @param {Response} res
 * @param {object} next
 * @returns {JSON | Error}
 */
const updateTask = async (req, res, next) => {
  try {
    const {title, description } = req.body;
    const { id } = req.user;
    const response = await editATask(id, title, description);
    return res.status(response.code).json(response);
  } catch (error) {
    return next(error);
  }
};



/** 
*complete a task
* @param {Request} req
* @param {Response} res
* @param {object} next
* @returns {JSON | Error}
*/
const completeTask = async (req, res, next) => {
  try{
    const { id } = req.user;

    const response = await changeTaskState(id)
    return res.status(response.code).json(response)
  }catch (error) {
    return next(error)
  }
}



module.exports = {
  createTask,
  fetchAllTasks,
  fetchTaskByUser,
  updateTask,
  completeTask
};
