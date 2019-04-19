DROP TABLE users;
DROP TABLE recipes;
-- DROP TABLE ingredients;
-- DROP TABLE recipes_ingredients;
-- DROP TABLE instructions;
-- DROP TABLE categories;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    image TEXT,
    prep_time INTEGER,
    cook_time INTEGER,
    contributor TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    instructions JSONB,
    ingredients JSONB
);

-- CREATE TABLE IF NOT EXISTS ingredients (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     food_group TEXT,
--     calories INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS recipes_ingredients (
--     id SERIAL PRIMARY KEY,
--     recipes_id INTEGER,
--     ingredients_id INTEGER,
--     amount TEXT,
--     unit TEXT
-- );

-- CREATE TABLE IF NOT EXISTS instructions (
--     id SERIAL PRIMARY KEY,
--     step INTEGER,
--     instruction TEXT,
--     recipes_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS categories (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     recipes_id INTEGER
-- );