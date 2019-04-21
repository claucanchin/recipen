var React = require("react");
var Layout = require("../layout");

class All extends React.Component {
    render() {
        // console.log(this.props.allRecipes);

        const themRecipes = this.props.allRecipes.map((recipe) => {
            return (
            <div class = "col-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <div class ="card text-left">
                    <img src={recipe.image} class="card-img-top" alt="recipe image"/>
                    <div class="card-body">
                        <h5>{recipe.name}</h5>
                        <p>{recipe.description}</p>
                    </div>
                        <div class="card-footer">
                            <small class="text-muted">By {recipe.contributor}</small>
                        </div>
                </div>
            </div>
            );
        });

        return (
            <Layout>
                <h1>All Recipes</h1>
                    <div class = "container">
                        <div class = "row">
                            {themRecipes}
                        </div>
                    </div>

            </Layout>
        );
    }
}

module.exports = All;