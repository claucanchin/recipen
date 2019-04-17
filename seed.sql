INSERT INTO users(username, password) VALUES ('admin', 'admin1234');


INSERT INTO recipes(name, description, image, prep_time, cook_time, contributor, created_at, updated_at) VALUES ('Fried Green Tomatoes', 'You can also fry up red tomatoes with this recipe but make sure they are not over ripe or they will be mushy. Serve these tomatoes outside with a glass of iced tea one summer night and enjoy the sunset with someone you love.', 'https://bit.ly/2KFNsyl', '5', '15', 'whistle_stop91', '2019-03-11 17:15:32', '2019-03-26 09:16:01');
INSERT INTO recipes(name, description, image, prep_time, cook_time, contributor, created_at, updated_at) VALUES ('Hard Boiled Egg', 'The softest hard boiled egg for the winter time. Can also be used as hand warmer.', 'https://airfryer.cooking/wp-content/uploads/2018/01/HardboiledEggs-Large.jpg', '2', '10', 'egg_man53', '2019-03-15 17:11:32', '2019-04-01 10:18:01');

INSERT INTO ingredients(name, food_group, calories) VALUES ('green tomato(es)', 'Fruit', '18');
INSERT INTO ingredients(name, food_group, calories) VALUES ('egg(s)', 'Poultry', '155');
INSERT INTO ingredients(name, food_group, calories) VALUES ('milk', 'Dairy', '61');
INSERT INTO ingredients(name, food_group, calories) VALUES ('all-purpose flour', 'Grains', '364');
INSERT INTO ingredients(name, food_group, calories) VALUES ('cornmeal', 'Grains', '370');
INSERT INTO ingredients(name, food_group, calories) VALUES ('bread crumbs', 'Grains', '395');
INSERT INTO ingredients(name, food_group, calories) VALUES ('salt', '', '0');
INSERT INTO ingredients(name, food_group, calories) VALUES ('black pepper', '', '251');
INSERT INTO ingredients(name, food_group, calories) VALUES ('vegetable oil', '', '884');


INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '1', '4', '');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '2', '2', '');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '3', '1/2', 'cup(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '4', '1', 'cups(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '5', '1/2', 'cup(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '6', '1/2', 'cup(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '7', '2', 'teaspoon(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '8', '1/4', 'teaspoon(s)');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '9', '4', 'quart');
INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('2', '2', '1', '');


INSERT INTO instructions(step, instruction, recipes_id) VALUES ('1', 'Slice tomatoes 1/2 inch thick. Discard the ends.', '1');
INSERT INTO instructions(step, instruction, recipes_id) VALUES ('2', 'Whisk eggs and milk together in a medium-size bowl. Scoop flour onto a plate. Mix cornmeal, bread crumbs and salt and pepper on another plate. Dip tomatoes into flour to coat. Then dip the tomatoes into milk and egg mixture. Dredge in breadcrumbs to completely coat.', '1');
INSERT INTO instructions(step, instruction, recipes_id) VALUES ('3', 'In a large skillet, pour vegetable oil (enough so that there is 1/2 inch of oil in the pan) and heat over a medium heat. Place tomatoes into the frying pan in batches of 4 or 5, depending on the size of your skillet. Do not crowd the tomatoes, they should not touch each other. When the tomatoes are browned, flip and fry them on the other side. Drain them on paper towels.', '1');
INSERT INTO instructions(step, instruction, recipes_id) VALUES ('1', 'In a small pot, boil some water', '2');
INSERT INTO instructions(step, instruction, recipes_id) VALUES ('2', 'When water is boiled, put in the egg.', '2');
INSERT INTO instructions(step, instruction, recipes_id) VALUES ('3', 'After 8 minutes, take the egg out. It should be edible.', '2');