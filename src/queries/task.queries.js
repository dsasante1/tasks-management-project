const createTask = `
INSERT INTO tasks (
    title,
    text,
    user_id
) VALUES ($1, $2, $3) RETURNING id, text, title, user_id
`;

const fetchAllTasks = `
SELECT p.id, p.title, p.text,
json_build_object(
    'id', u.id,
    'firstName', u.firstname,
    'lastName', u.lastname,
    'username', u.username
) as user
FROM tasks p
INNER JOIN users u on p.user_id = u.id
`;

const fetchTasksByUser = `
SELECT id, title, text FROM tasks WHERE user_id=$1
`;

const editTask = `
UPDATE tasks
SET title=$1, text=$2
WHERE task=$3
RETURNING *
`;

const fetchTaskById = `SELECT user_id FROM tasks WHERE id=$1`;

module.exports = {
  createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editTask,
  fetchTaskById,
};
