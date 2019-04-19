var React = require("react");
var Layout = require("../layout");

class Delete extends React.Component {
  render() {

    const recipe = this.props.recipe[0];
    const deleteAction = `/recipes/${this.props.recipe[0].id}?_method=delete`;

    return (
        <Layout>
            <h3>Delete recipe?</h3>
                <form method="POST" action={deleteAction}>
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
                </div>
                    <input type="submit" value="Delete"/>
                </form>
        </Layout>
    );
  }
}

module.exports = Delete;