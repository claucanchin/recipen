var React = require("react");
var Layout = require("../layout");

class All extends React.Component {
    render() {
        // console.log(this.props.allRecipes);

        const themRecipes = this.props.allRecipes.map((recipe) => {
            return (
                <div>
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                    <p><img src={recipe.image} alt="recipe image"/></p>
                    <p>Preparation time: {recipe.prep_time} minutes</p>
                    <p>Cooking time: {recipe.cook_time} minutes</p>
                    <p>Ingredients:</p>
                    { recipe.ingredients.items.map(item =>
                        <p>{item}</p>
                    )}
                    <p>Instructions:</p>
                    { recipe.instructions.steps.map(step =>
                        <p>{step}</p>
                    )}
                    <p>Posted by {recipe.contributor}</p>
                    <p>------------------------------</p>
                </div>
            );
        });

        return (
            <Layout>
                <h1>All Recipes</h1>
                <div>
                    {themRecipes}
                </div>
            </Layout>
        );
    }
}

module.exports = All;