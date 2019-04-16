/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllRecipes = (callback) => {

    let queryString = 'SELECT * FROM recipes';

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

        console.error('Query Error: ', error.stack);
        response.send('Query Error');
      } else {

        // invoke callback function with results after query has executed

        console.log("recipes result.rows: ");
        // console.log(result.rows);
        // callback(result.rows);

      }
    });
  };

  return {
    getAllRecipes
  };
};