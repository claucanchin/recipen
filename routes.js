module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *        ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  const recipeController = require('./controllers/recipes')(allModels);

    app.get('/recipes/new', recipeController.recipeForm);
    app.post('/recipes', recipeController.createRecipe);

    app.get('/recipes', recipeController.allRecipes);
    app.get('/recipes/:id', recipeController.getRecipeById);

    app.get('/recipes/:id/edit', recipeController.editForm);
    app.put('/recipes/:id', recipeController.updateRecipe);

    app.get('/recipes/:id/delete', recipeController.deleteForm);
    app.delete('/recipes/:id', recipeController.deleteRecipe);


};