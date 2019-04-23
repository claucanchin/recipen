var React = require("react");
var Layout = require("../layout");

class Recipe extends React.Component {
    render() {

        const recipe = this.props.recipe[0];
        const editRoute = "/recipes/" + recipe.id + "/edit";

        return (
            <Layout>
                <h3>{recipe.name}</h3>
                <p>By {recipe.contributor}</p>
                <div class = "container">
                    <div class = "row">
                        <div class = "col">
                            <h5>Ingredients:</h5>
                                { recipe.ingredients.items.map(item =>
                                    <div>{item}</div>
                                )}
                        </div>
                        <div class = "col">
                            <div style={{'text-align':'right'}}><img src={recipe.image} class="img-fluid" alt="recipe image"/></div>
                        </div>
                    </div>
                    <div class = "row my-3">
                        <div class = "col">
                            <p>{recipe.description}</p>
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

                            <form action={editRoute}>
                           { !this.props.hideEdit && <button class="btn btn-secondary my-2 my-sm-0" id="btn" type="submit">Edit Recipe</button>}
                            </form>

                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Recipe;