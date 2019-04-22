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
            <h3>Edit / Delete Recipe</h3>
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
                            <img src={recipe.image} style={{width:'180px', 'padding-left':'100px', 'padding-left':'50px'}}/>
                            <input type="file" name="image" style={{'padding-left':'50px'}}/>
                        </div>


                    <div class="container" style={{display: 'flex', 'justify-content':'center', 'align-items':'center', padding:'10px'}}>
                    <div class="row">
                    <div class="col">
                    <div>Preparation Time (minutes):</div>
                        <div><input name="prep_time" type="integer" value={recipe.prep_time}/></div>
                    </div>
                    <div class="col">
                    <div>Cooking Time <div>(minutes):</div></div>
                        <div><input name="cook_time" type="integer" value={recipe.cook_time}/></div>
                    </div>
                    </div>
                    </div>

                    <div class="container" style={{display: 'flex', 'justify-content':'center', 'align-items':'center', padding:'10px'}}>
                    <div class="row">
                    <div class="col">
                    <div>Ingredients:</div>
                        <div id="ingredient-form"></div>
                    </div>
                    <div class="col">
                    <div>Instructions:</div>
                        <div id="instruction-form"></div>
                    </div>
                    </div>
                    </div>

                    <div>Posted by {recipe.contributor}</div>

                    <span>
                    <button class="btn btn btn-outline-dark my-2 my-sm-2" type="submit">Edit Recipe</button>
                    <div id='ingredient-json' data-ingredients={ingredientsJSON}></div>
                    <div id='instruction-json' data-instructions={instructionsJSON}></div>
                    </span>
                </form>
                <span>
                <form action={deleteUrl}>
                    <button class="btn btn btn-outline-danger my-2 my-sm-2" type="submit">Delete Recipe</button>

                </form>
                </span>
        </Layout>
    );
  }
}

module.exports = Edit;