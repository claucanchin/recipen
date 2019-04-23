const multer  = require('multer');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
       cb(null, 'public/images')
   },
   filename: function (req, file, cb) {
       cb(null, file.originalname)
   }
});

const upload = multer({ storage: storage })

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
    const userController = require('./controllers/users')(allModels);

//recipes

        app.get('/recipes/new', recipeController.recipeForm);
        app.post('/recipes',upload.single('image'), recipeController.createRecipe);

        app.get('/', recipeController.allRecipes);
        app.get('/recipes', recipeController.allRecipes);
        app.get('/recipes/:id', recipeController.getRecipeById);

        app.get('/recipes/:id/edit', recipeController.editForm);
        app.put('/recipes/:id', upload.single('image'), recipeController.updateRecipe);

        app.get('/recipes/:id/delete', recipeController.deleteForm);
        app.delete('/recipes/:id', recipeController.deleteRecipe);

// users

        app.get('/register', userController.registerForm);
        app.post('/register', userController.registered);

        app.get('/login', userController.loginForm);
        app.post('/login', userController.loggedIn);

};