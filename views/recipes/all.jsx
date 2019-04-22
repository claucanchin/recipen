var React = require("react");
var Layout = require("../layout");

class All extends React.Component {
    render() {
        // console.log(this.props.allRecipes);

        const themRecipes = this.props.allRecipes.map((recipe) => {

            let recipeUrl = "/recipes/" + recipe.id;

            return (
                <div class ="card text-left">
                    <a href = {recipeUrl}><img src={recipe.image} class="card-img-top img-fluid" alt="recipe image"/></a>
                    <div class="card-body">
                        <h5>{recipe.name}</h5>
                        <p class="description">{recipe.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">By {recipe.contributor}</small>
                    </div>
                </div>
            );
        });

        return (
            <Layout>
                <div class="card-columns">
                    {themRecipes}
                </div>
            </Layout>
        );
    }
}

module.exports = All;