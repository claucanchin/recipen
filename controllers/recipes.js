module.exports = (db) => {

    let recipeRequestHandler = (request, response) => {

        let allRecipes = db.recipes.getAllRecipes();
        console.log("hello hello hello hello " + allRecipes);

        let data = { allRecipes: allRecipes };

        response.render('recipes', data);


    };

    return {
        recipeRequestHandler: recipeRequestHandler,
    };

};