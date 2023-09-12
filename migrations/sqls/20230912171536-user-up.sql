/* Replace with your SQL commands *//* Replace with your SQL commands */

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varchar(100) NOT NULL,
    password varchar(60) NOT NULL,
    created_at timestamptz DEFAULT NOW()
)