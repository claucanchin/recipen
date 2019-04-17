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
                    Name: <br/>
                        <p>{recipe.name}</p>
                    Description: <br/>
                        <p>{recipe.description}</p>
                    Image: <br/>
                        <img src={recipe.image} alt="recipe image"/><br/>
                    Preparation Time (minutes): <br/>
                        <p>{recipe.prep_time}</p>
                    Cooking Time (minutes): <br/>
                        <p>{recipe.cook_time}</p>
                    Contributor: <br/>
                        <p>{recipe.contributor}</p>
                    <input type="submit" value="Delete"/>
                </form>
        </Layout>
    );
  }
}

module.exports = Delete;