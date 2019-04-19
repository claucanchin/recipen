var React = require("react");
var Layout = require("../layout");

class Edit extends React.Component {
  render() {

    const recipe = this.props.recipe[0];
    const putAction = `/recipes/${this.props.recipe[0].id}?_method=PUT`;
    const ingredientsJSON = JSON.stringify(recipe.ingredients);

    return (
        <Layout>
            <h3>Edit Recipe</h3>
                <form method="POST" action={putAction}>
                    Name: <br/>
                        <textarea name="name" cols="40" rows="2" value={recipe.name}></textarea><br/>
                    Description: <br/>
                        <textarea name="description" cols="40" rows="8" value={recipe.description}></textarea><br/>
                    Image URL: <br/>
                        <textarea name="image" cols="40" rows="2" value={recipe.image}></textarea><br/>
                    Preparation Time (minutes):
                        <input name="prep_time" type="integer" value={recipe.prep_time}/><br/>
                    Cooking Time (minutes):
                        <input name="cook_time" type="integer" value={recipe.cook_time}/><br/>
                        <div>Ingredients:</div>
                    <div id="ingredient-form">
                        </div>
                        <button type="button" id="add-ingredient">Add Ingredient</button>
                    Instructions: <br/>
                        <textarea name="instructions" cols="40" rows="8" value={recipe.instructions}></textarea><br/>
                    Posted by {recipe.contributor}<br/>
                    <input type="submit" value="Edit Recipe"/>
                    <div id='ingredient-json' data-ingredients={ingredientsJSON}></div>
                </form>
        </Layout>
    );
  }
}

module.exports = Edit;