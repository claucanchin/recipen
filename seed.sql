INSERT INTO users(username, password) VALUES ('admin', 'admin1234');

INSERT INTO recipes(name, description, image, prep_time, cook_time, contributor, created_at, updated_at, instructions, ingredients) VALUES ('Fried Green Tomatoes', '"You can also fry up red tomatoes with this recipe but make sure they are not over ripe or they will be mushy. Serve these tomatoes outside with a glass of iced tea one summer night and enjoy the sunset with someone you love."', 'https://bit.ly/2KFNsyl', '5', '15', 'whistle_stop91', '2019-03-11 17:15:32', '2019-03-26 09:16:01', '{"steps": ["Slice tomatoes 1/2 inch thick. Discard the ends.", "When water is boiled, put in the egg.", "In a large skillet, pour vegetable oil (enough so that there is 1/2 inch of oil in the pan) and heat over a medium heat. Place tomatoes into the frying pan in batches of 4 or 5, depending on the size of your skillet. Do not crowd the tomatoes, they should not touch each other. When the tomatoes are browned, flip and fry them on the other side. Drain them on paper towels."]}'::jsonb, '{"items": ["4 large green tomatoes", "2 eggs", "1/2 cup milk", "1 cup all-purpose flour", "1/2 cup cornmeal", "1/2 cup bread crumbs", "2 teaspoons coarse kosher salt", "1/4 teaspoon ground black pepper", "1 quart vegetable oil"]}'::jsonb);

INSERT INTO recipes(name, description, image, prep_time, cook_time, contributor, created_at, updated_at, instructions, ingredients) VALUES ('Ken''s Perfect Hard Boiled Egg', '"Couldn''t sleep one night so I researched several ways to hard boil eggs and developed this process. While you do not taste the vinegar or salt, they both pull the skin from the eggshell so it peels easily without tearing or sticking. Family members call them "Ken''s Eggs". Enjoy!"', 'https://airfryer.cooking/wp-content/uploads/2018/01/HardboiledEggs-Large.jpg', '5', '20', 'egg_man53', '2019-03-15 17:11:32', '2019-04-01 10:18:01', '{"steps": ["Combine the salt, vinegar, and water in a large pot, and bring to a boil over high heat. Add the eggs one at a time, being careful not to crack them. Reduce the heat to a gentle boil, and cook for 14 minutes.", "Once the eggs have cooked, remove them from the hot water, and place into a container of ice water or cold, running water. Cool completely, about 15 minutes. Store in the refrigerator up to 1 week."]}'::jsonb, '{"items": ["1 tablespoon salt", "1/4 cup distilled white vinegar", "6 cups water", "8 eggs"]}'::jsonb);

-- INSERT INTO ingredients(name, food_group, calories) VALUES ('green tomato(es)', 'Fruit', '18');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('egg(s)', 'Poultry', '155');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('milk', 'Dairy', '61');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('all-purpose flour', 'Grains', '364');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('cornmeal', 'Grains', '370');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('bread crumbs', 'Grains', '395');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('salt', '', '0');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('black pepper', '', '251');
-- INSERT INTO ingredients(name, food_group, calories) VALUES ('vegetable oil', '', '884');


-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '1', '4', '');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '2', '2', '');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '3', '1/2', 'cup(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '4', '1', 'cups(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '5', '1/2', 'cup(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '6', '1/2', 'cup(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '7', '2', 'teaspoon(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '8', '1/4', 'teaspoon(s)');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('1', '9', '4', 'quart');
-- INSERT INTO recipes_ingredients(recipes_id, ingredients_id, amount, unit) VALUES ('2', '2', '1', '');


-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('1', 'Slice tomatoes 1/2 inch thick. Discard the ends.', '1');
-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('2', 'Whisk eggs and milk together in a medium-size bowl. Scoop flour onto a plate. Mix cornmeal, bread crumbs and salt and pepper on another plate. Dip tomatoes into flour to coat. Then dip the tomatoes into milk and egg mixture. Dredge in breadcrumbs to completely coat.', '1');
-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('3', 'In a large skillet, pour vegetable oil (enough so that there is 1/2 inch of oil in the pan) and heat over a medium heat. Place tomatoes into the frying pan in batches of 4 or 5, depending on the size of your skillet. Do not crowd the tomatoes, they should not touch each other. When the tomatoes are browned, flip and fry them on the other side. Drain them on paper towels.', '1');
-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('1', 'In a small pot, boil some water.', '2');
-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('2', 'When water is boiled, put in the egg.', '2');
-- INSERT INTO instructions(step, instruction, recipes_id) VALUES ('3', 'After 8 minutes, take the egg out. It should be edible.', '2');