var React = require("react");
var Layout = require("../layout");

class New extends React.Component {
  render() {

    return (
        <Layout>
            <h3>Add new recipe</h3>
                <form id="new-recipe-form" method="POST" enctype="multipart/form-data" action="/recipes">
                    <div>Name:</div>
                        <div>
                            <textarea name="name" cols="40" rows="1" placeholder="Pecan Pie"></textarea>
                        </div>

                    <div>Description:</div>
                        <div>
                            <textarea name="description" cols="40" rows="8" placeholder="The only recipe you need to make the perfect pecan pie."></textarea>
                        </div>

                    <div>Image:</div>
                        <div>
                            <input type="file" name="image" required/>
                        </div>

                    <div>Preparation Time (minutes):</div>
                        <div>
                            <input name="prep_time" type="integer" placeholder="10"/>
                        </div>

                    <div>Cooking Time (minutes):</div>
                        <div>
                            <input name="cook_time" type="integer" placeholder="3"/>
                        </div>

                    <div>Ingredients:</div>
                        <div id="ingredient-form">
                            <div>
                                <input class="ingredient-field" name="ingredient-1" placeholder="Cup of pecan"/>
                            </div>
                        </div>
                    <button type="button" id="add-ingredient" class="btn btn-outline-secondary btn-sm">Add Ingredient</button>

                    <div>Instructions:</div>
                        <div id="instruction-form">
                            <div>
                                <textarea class="instruction-field" name="instruction-1" cols="40" rows="2" placeholder="1. Blend pecan"></textarea>
                            </div>
                        </div>
                    <button type="button" id="add-instruction" class="btn btn-outline-secondary btn-sm">Add Instruction</button>

                    <div>
                        <button class="btn btn btn-dark my-2 my-sm-4" type="submit">Add New Recipe</button>
                    </div>
                </form>
        </Layout>
    );
  }
}

module.exports = New;