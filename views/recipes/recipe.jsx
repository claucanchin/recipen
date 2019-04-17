var React = require("react");

class Recipe extends React.Component {
    render() {

        const recipe = this.props.recipe[0];

        return (
            <html>
        <head />
        <body>
          <h3>Hello</h3>
          <div>{recipe.name}</div>
        </body>
      </html>
        );
    }
}

module.exports = Recipe;