/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = callback => {

    const queryString = 'SELECT * FROM recipes';

    dbPoolInstance.query(queryString, (error, result) => {

      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows)
      }

    });
  };

  let getOne = (request,callback) => {

    const queryString = 'SELECT * FROM recipes WHERE id=' + request.params.id;

    dbPoolInstance.query(queryString, (err, result) => {
        err ? callback(error, null) : callback(null, result.rows);
    })
  };

  return {
    getAll,
    getOne
  };
};