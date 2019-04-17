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

  app.get('/recipes', recipeController.allRecipes);
  app.get('/recipes/:id', recipeController.getRecipeById)
  // app.post('/recipes/new')
};