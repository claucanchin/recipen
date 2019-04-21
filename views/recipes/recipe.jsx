var React = require("react");
var Layout = require("../layout");

class Recipe extends React.Component {
    render() {

        const recipe = this.props.recipe[0];
        console.log(recipe);

        return (
            <Layout>
                <div class = "container my-5">
                    <div class = "row my-3">
                        <div class = "col">
                            <h3>{recipe.name}</h3>
                            <p>{recipe.description}</p>
                        </div>
                        <div class = "col">
                            <p><img src={recipe.image} alt="recipe image"/></p>
                        </div>
                    </div>
                    <div class = "row my-3">
                        <div class = "col text-left">
                            <h5>Ingredients:</h5>
                                { recipe.ingredients.items.map(item =>
                                    <div>{item}</div>
                                )}
                        </div>
                    </div>
                    <div class = "row my-3">
                        <div class = "col">
                            <p>Preparation time: {recipe.prep_time} minutes</p>
                        </div>
                        <div class = "col">
                            <p>Cooking time: {recipe.cook_time} minutes</p>
                        </div>
                    </div>
                    <div class = "row my-3">
                        <div class = "col">
                            <h5>Instructions:</h5>
                            <div class = "text-left">
                                { recipe.instructions.steps.map(step =>
                                    <p>{step}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div class = "row my-3">
                        <div class = "col">
                            <p>Posted by {recipe.contributor}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Recipe;