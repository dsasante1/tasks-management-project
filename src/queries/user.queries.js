const addUser = `
 INSERT INTO users (
    firstname,
    lastname,
    password,
    username
 )
 VALUES ($1, $2, $3, $4) RETURNING id, firstname, lastname , username, created_at
`;

const findUserByUsername = `
 SELECT id, firstname, lastname, username, password FROM users WHERE username =$1
`

const fetchAllUsers = `SELECT id, firstname, lastname, username FROM users`

const fetchUserById = `SELECT id, firstname, lastname, username FROM users WHERE id=$1`

module.exports ={
    addUser,
    findUserByUsername,
    fetchAllUsers,
    fetchUserById
}

