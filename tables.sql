DROP TABLE users;
DROP TABLE recipes;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    image TEXT,
    prep_time INTEGER,
    cook_time INTEGER,
    contributor TEXT,
    instructions JSONB,
    ingredients JSONB
);