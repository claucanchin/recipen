var React = require("react");
var Layout = require("../layout");

class New extends React.Component {
  render() {

    return (
        <Layout>
            <h3>Add new recipe</h3>
                <form method="POST" action="/recipes">
                    Name: <br/>
                        <textarea name="name" cols="40" rows="10" value="Lonely Red Apple"></textarea><br/>
                    Description: <br/>
                        <textarea name="description" cols="40" rows="10" value="The only recipe you need to make your apple lonely."></textarea><br/>
                    Image: <br/>
                        <textarea name="image" cols="40" rows="10" value="https://cdn2.stylecraze.com/wp-content/uploads/2015/08/1508_10-Strange-Side-Effects-Of-Consuming-Apple.jpg"></textarea><br/>
                    Preparation Time (minutes): <br/>
                        <input name="prep_time" type="integer" value="2"/><br/>
                    Cooking Time (minutes): <br/>
                        <input name="cook_time" type="integer" value="4"/><br/>
                    Contributor: <br/>
                        <input name="contributor" type="text" value="food_lady"/><br/>
                    <input type="submit" value="Add New Recipe"/>
                </form>
        </Layout>
    );
  }
}

module.exports = New;