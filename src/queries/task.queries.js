const createTask = `
INSERT INTO tasks (
    title,
    description,
    user_id
) VALUES ($1, $2, $3) RETURNING id, description, title, user_id, completed
`;

const fetchAllTasks = `
SELECT * FROM tasks
`;

const fetchTasksByUser = `
SELECT id, title, description FROM tasks WHERE user_id=$1
`;

const editTask = `
UPDATE tasks
SET title=$2, description=$3
WHERE id=$1
RETURNING *
`;

const fetchTaskById = `SELECT id, title, description, user_id FROM tasks WHERE id=$1`;


const changeTaskStatus = `UPDATE tasks
SET completed=TRUE WHERE id=$1 RETURNING *`;

module.exports = {
  createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editTask,
  fetchTaskById,
  changeTaskStatus
};
