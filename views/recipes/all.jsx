var React = require("react");

class All extends React.Component {
    render() {
        console.log(this.props.allRecipes);

        const themRecipes = this.props.allRecipes.map((recipe) => {
            return (
                <div>
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                    <p><img src={recipe.image} alt="recipe image"/></p>
                    <p>{recipe.prep_time} minutes</p>
                    <p>{recipe.cook_time} minutes</p>
                    <p>By {recipe.contributor}</p>
                </div>
            );
        });

        return (
            <html>
            <head />
                <body>
                    <h3>All recipes:</h3>
                    <div>
                        {themRecipes}
                    </div>
                </body>
            </html>
            );

    }
}

module.exports = All;