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
                    <p><img src={recipe.image} alt="recipe image"/></p>
                    <p>Posted by {recipe.contributor}</p>
                </div>
                    <button class="btn btn btn-outline-danger my-2 my-sm-4" type="submit">Delete</button>
                </form>
        </Layout>
    );
  }
}

module.exports = Delete;