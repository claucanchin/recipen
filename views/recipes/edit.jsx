var React = require("react");
var Layout = require("../layout");

class Edit extends React.Component {
  render() {

    const recipe = this.props.recipe[0];
    const putAction = `/recipes/${this.props.recipe[0].id}?_method=PUT`;
    const ingredientsJSON = JSON.stringify(recipe.ingredients);
    const instructionsJSON = JSON.stringify(recipe.instructions);
    const deleteUrl = "/recipes/" + recipe.id + "/delete";


    return (
        <Layout>
            <h3>Edit Recipe</h3>
                <form method="POST" action={putAction} enctype="multipart/form-data">
                    <div>Name:</div>
                        <div>
                            <textarea name="name" cols="40" rows="2" value={recipe.name}></textarea>
                        </div>
                    <div>Description:</div>
                        <div>
                            <textarea name="description" cols="40" rows="8" value={recipe.description}></textarea>
                        </div>
                    <div>Image:</div>
                        <div>
                            <img src={recipe.image} style={{width:"50px"}}/>
                            <input type="file" name="image" value="fried fish"/>
                        </div>
                    <div>Preparation Time (minutes):</div>
                        <div>
                            <input name="prep_time" type="integer" value={recipe.prep_time}/>
                        </div>
                    <div>Cooking Time (minutes):</div>
                        <div>
                            <input name="cook_time" type="integer" value={recipe.cook_time}/>
                        </div>
                    <div>Ingredients:</div>
                        <div id="ingredient-form"></div>
                    <div>Instructions:</div>
                        <div id="instruction-form"></div>
                    Posted by {recipe.contributor}<br/>
                    <input type="submit" value="Edit Recipe"/>
                    <div id='ingredient-json' data-ingredients={ingredientsJSON}></div>
                    <div id='instruction-json' data-instructions={instructionsJSON}></div>
                </form>
                <form action={deleteUrl}>
                    <input type="submit" value="Delete Recipe" />
                </form>
        </Layout>
    );
  }
}

module.exports = Edit;