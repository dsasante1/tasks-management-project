const {
  createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editTask
} = require('../queries/task.queries');
const { runQuery } = require('../config/database.config');

/**
 * Creates a new task in the db
 * @param {object} body
 * @param {number} id
 * @returns {Response}
 */
const makeTask = async (body, id) => {
  const { title, text } = body;
  const task = await runQuery(createTask, [title, text, id]);
  return {
    status: 'success',
    message: 'Task created successfully!',
    code: 201,
    data: {
      task,
    },
  };
};

/**
 * Fetches all tasks from the db
 * @returns {Response}
 */
const getAllTasks = async () => {
  const result = await runQuery(fetchAllTasks);
  return {
    status: 'success',
    message: 'Tasks fetched successfully!',
    code: 200,
    data: {
      result,
    },
  };
};

/**
 * Gets tasks by a single user
 * @param {number} id
 * @returns {Response}
 */
const getTaskByUser = async (id) => {
  const result = await runQuery(fetchTasksByUser, [id]);
  return {
    status: 'success',
    message: 'Tasks fetched successfully!',
    code: 200,
    data: {
      result,
    },
  };
};

/**
 * Edits a task
 * @param {string} title
 * @param {string} text
 * @param {number} id
 * @returns {Response}
 */
const editATask = async (title, text, id) => {
    const result = await runQuery(editTask, [title, text, id]);
    return {
      status: 'success',
      message: 'Tasks edited successfully!',
      code: 200,
      data: {
        result,
      },
    };
}

module.exports = {
  makeTask,
  getAllTasks,
  getTaskByUser,
  editATask
};
