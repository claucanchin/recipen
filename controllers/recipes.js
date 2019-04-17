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
            response.redirect(`/recipes/${recipe[0].id}`);
        })
    };

    let editForm = (request, response) => {
        db.recipes.getOne(request, (error, recipe) => {
            response.render('recipes/edit', { recipe });
        })
    };

    let updateRecipe = (request, response) => {
        db.recipes.updateOne(request, (error, recipe) => {
            console.log(recipe);
            response.redirect(`/recipes/${recipe[0].id}`);
        })
    };

    // let test = (request, response) => {
    //     db.recipes.testOne(request, (error, recipe) => {
    //         console.log(recipe);
    //         response.send('successsssss', recipe);
    //     })
    // };

    return {
        allRecipes: allRecipes,
        getRecipeById: getRecipeById,
        recipeForm: recipeForm,
        createRecipe: createRecipe,
        editForm: editForm,
        updateRecipe: updateRecipe,
        // test: test,
    };

};