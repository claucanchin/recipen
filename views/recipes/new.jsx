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
                        <div id="ingredients-form">
                            <div>
                                <input class="ingredient-field" name="ingredient-1" value="1 apple"/></div>
                            </div>
                        <button type="button" id="add-ingredient">Add Ingredient</button>

                    <div>Instructions:</div>
                    <div>
                        <textarea name="instructions" cols="40" rows="2" value="1. Walk away from the apple."></textarea>
                    </div>

                    <div>Contributor:</div>
                    <div>
                        <input name="contributor" type="text" value="food_lady"/>
                    </div>
                    <div>
                        <input type="submit" value="Add New Recipe"/>
                    </div>
                </form>
        </Layout>
    );
  }
}

module.exports = New;