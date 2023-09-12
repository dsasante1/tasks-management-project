/* Replace with your SQL commands */
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title varchar(100) NOT NULL,
    "description" varchar(255) NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    created_at timestamptz DEFAULT NOW()
)