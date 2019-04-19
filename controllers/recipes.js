const sha256 = require('js-sha256');

module.exports = (db) => {

    let allRecipes = (request, response) => {
        db.recipes.getAll((error, allRecipes) => {
            response.render('recipes/all', { allRecipes });
        })
    };

    let getRecipeById = (request, response) => {
        db.recipes.getOne(request, (error, recipe) => {
            response.render('recipes/recipe', { recipe });
        })
    };

    let recipeForm = (request, response) => {
        response.render('recipes/new')
    };

    let createRecipe = (request, response) => {
        db.recipes.createOne(request, (error, recipe) => {
            response.redirect(`recipes/${recipe[0].id}`);
        })
    };

    let isLoggedIn = function(request) {

        if (request.cookies === undefined) {
            return false;
        }

        const SALT = "not all lobsters are angry";
        let loggedInHash = sha256(request.cookies['username'] + SALT);

        return request.cookies['logged_in'] === loggedInHash;
    }

    let editForm = (request, response) => {

        if (!isLoggedIn(request)) {
            return response.redirect('/login');
        }
        db.recipes.getOne(request, (error, recipe) => {
            response.render('recipes/edit', { recipe });
        })
    };

    let updateRecipe = (request, response) => {
        db.recipes.updateOne(request, (error, recipe) => {
            response.redirect(`/recipes/${recipe[0].id}`);
        })
    };

    let deleteForm = (request, response) => {
        db.recipes.getOne(request, (error, recipe) => {
            response.render('recipes/delete', { recipe });
        })
    };

    let deleteRecipe = (request, response) => {
        db.recipes.deleteOne(request, (error, recipe) => {
            response.redirect('/recipes');
        })
    };

    return {
        allRecipes: allRecipes,
        getRecipeById: getRecipeById,
        recipeForm: recipeForm,
        createRecipe: createRecipe,
        editForm: editForm,
        updateRecipe: updateRecipe,
        deleteForm: deleteForm,
        deleteRecipe: deleteRecipe,
    };

};