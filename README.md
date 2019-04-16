# recipen

CONCEPT DESIGN

Problem Statement: 
Struggle to find / remember the recipes that I've put in my Notes app, or they're very messy and have no structure. 

Solution: 
Fool proof way to enter recipes that get organized properly. 
Able to search for recipes by name, ingredients. 


USER STORIES

MVP
As a user,
- I want to be able to add a new recipe: title, ingredients, measurement, instructions, picture, prep time 
- I want to be able to search for the recipe by name and ingredients 
- I want to be able to edit a recipe 
- I want to be able to delete a recipe 

Further:
- Add user log in that ties in with the recipe contributor
- Add functionality filter by date created, date edited, rating, prep time, cook time, tag, calories
- Ability to add recipe as favorite
- Sort alphabetically, recently created, recently edited 
- Option to view recipes by cards (with image) or list
- Make mobile friendly and responsive 
- Add validation:
  - Validate that new recipe must at least contain a recipe name (the rest can be blank)
  - Login
- Integrate with a fitness tracker app, to-do (grocery list) app
- Save selected recipe as pdf 


WIREFRAMING
- main page shows index of all recipes (max 20 per page)

ERD

Photo upload
- multer
- cloudinary