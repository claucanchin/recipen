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

    return {
        allRecipes: allRecipes,
        getRecipeById: getRecipeById,
    };

};