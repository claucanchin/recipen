var React = require("react");
var Layout = require("../layout");

class Recipe extends React.Component {
    render() {

        const recipe = this.props.recipe[0];

        return (
            <Layout>
                <h1>Recipe:</h1>
                <div>
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                    <p><img src={recipe.image} alt="recipe image"/></p>
                    <p>Preparation time: {recipe.prep_time} minutes</p>
                    <p>Cooking time: {recipe.cook_time} minutes</p>
                    <p>Posted by {recipe.contributor}</p>
                </div>
            </Layout>
        );
    }
}

module.exports = Recipe;