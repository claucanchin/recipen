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

  app.get('/recipes', recipeController.recipeRequestHandler);
};