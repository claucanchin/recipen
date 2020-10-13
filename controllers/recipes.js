const sha256 = require('js-sha256');

module.exports = (db) => {
  const isLoggedIn = (request) => {
    if (request.cookies === undefined) {
      return false;
    }

    const SALT = 'not all lobsters are angry';
    const loggedInHash = sha256(request.cookies.username + SALT);

    return request.cookies.logged_in === loggedInHash;
  };

  const allRecipes = (request, response) => {
    // eslint-disable-next-line no-shadow
    db.recipes.getAll((error, allRecipes) => {
      response.render('recipes/all', { allRecipes });
    });
  };

  const getRecipeById = (request, response) => {
    db.recipes.getOne(request, (error, recipe) => {
      let hideEdit = false;

      if (request.cookies.username !== recipe[0].contributor) {
        hideEdit = true;
      }
      response.render('recipes/recipe', { recipe, hideEdit });
    });
  };

  const recipeForm = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return response.render('recipes/new');
  };

  const createRecipe = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return db.recipes.createOne(request, (error, recipe) => {
      // console.log(recipe);
      response.redirect(`recipes/${recipe[0].id}`);
    });
  };

  const editForm = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return db.recipes.getOne(request, (error, recipe) => {
      response.render('recipes/edit', { recipe });
    });
  };

  const updateRecipe = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return db.recipes.updateOne(request, (error, recipe) => {
      response.redirect(`/recipes/${recipe[0].id}`);
    });
  };

  const deleteForm = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return db.recipes.getOne(request, (error, recipe) => {
      response.render('recipes/delete', { recipe });
    });
  };

  const deleteRecipe = (request, response) => {
    if (!isLoggedIn(request)) {
      return response.redirect('/login');
    }
    return db.recipes.deleteOne(request, () => {
      response.redirect('/recipes');
    });
  };

  return {
    allRecipes,
    getRecipeById,
    recipeForm,
    createRecipe,
    editForm,
    updateRecipe,
    deleteForm,
    deleteRecipe,
  };
};
