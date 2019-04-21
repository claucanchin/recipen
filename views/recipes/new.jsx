var React = require("react");
var Layout = require("../layout");

class New extends React.Component {
  render() {

    return (
        <Layout>
            <h3>Add new recipe</h3>
                <form id="new-recipe-form" method="POST" action="/recipes">

                    <div>Name:</div>
                        <div>
                            <textarea name="name" cols="40" rows="1" value="Lonely Red Apple"></textarea>
                        </div>

                    <div>Description:</div>
                        <div>
                            <textarea name="description" cols="40" rows="8" value="The only recipe you need to make your apple lonely."></textarea>
                        </div>

                    <div>Image URL:</div>
                        <div>
                            <textarea name="image" cols="40" rows="2" value="https://cdn2.stylecraze.com/wp-content/uploads/2015/08/1508_10-Strange-Side-Effects-Of-Consuming-Apple.jpg"></textarea>
                        </div>

                    <div>Preparation Time (minutes):</div>
                        <div>
                            <input name="prep_time" type="integer" value="2"/>
                        </div>

                    <div>Cooking Time (minutes):</div>
                        <div>
                            <input name="cook_time" type="integer" value="4"/>
                        </div>

                    <div>Ingredients:</div>
                        <div id="ingredient-form">
                            <div>
                                <input class="ingredient-field" name="ingredient-1" value="1 apple"/>
                            </div>
                        </div>
                    <button type="button" id="add-ingredient">Add Ingredient</button>

                    <div>Instructions:</div>
                        <div id="instruction-form">
                            <div>
                                <textarea class="instruction-field" name="instruction-1" cols="40" rows="2" value="1. Leave apple."></textarea>
                            </div>
                        </div>
                    <button type="button" id="add-instruction">Add Instruction</button>

                    <div>
                        <input type="submit" value="Add New Recipe"/>
                    </div>
                </form>
        </Layout>
    );
  }
}

module.exports = New;