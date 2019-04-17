var React = require("react");
var Layout = require("../layout");

class Edit extends React.Component {
  render() {

    const recipe = this.props.recipe[0];
    const putAction = `/recipes/${this.props.recipe[0].id}?_method=PUT`;

    return (
        <Layout>
            <h3>Edit Recipe</h3>
                <form method="POST" action={putAction}>
                    Name: <br/>
                        <textarea name="name" cols="40" rows="10" value={recipe.name}></textarea><br/>
                    Description: <br/>
                        <textarea name="description" cols="40" rows="10" value={recipe.description}></textarea><br/>
                    Image: <br/>
                        <textarea name="image" cols="40" rows="10" value={recipe.image}></textarea><br/>
                    Preparation Time (minutes): <br/>
                        <input name="prep_time" type="integer" value={recipe.prep_time}/><br/>
                    Cooking Time (minutes): <br/>
                        <input name="cook_time" type="integer" value={recipe.cook_time}/><br/>
                    Contributor: <br/>
                        {recipe.contributor}<br/>
                    <input type="submit" value="Edit Recipe"/>
                </form>
        </Layout>
    );
  }
}

module.exports = Edit;