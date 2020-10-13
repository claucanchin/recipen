/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  const getAll = (callback) => {
    const queryString = 'SELECT * FROM recipes ORDER BY id ASC';

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  const getOne = (request, callback) => {
    const queryString = `SELECT * FROM recipes WHERE id=${request.params.id}`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  const createOne = (request, callback) => {
    const ingredients = [];
    const instructions = [];

    let ingredientCount = 1;
    while (true) {
      const curr = request.body[`ingredient-${ingredientCount}`];
      if (!curr) {
        break;
      }
      ingredientCount += 1;
      ingredients.push(curr);
    }

    let instructionCount = 1;
    while (true) {
      const curr = request.body[`instruction-${instructionCount}`];
      if (!curr) {
        break;
      }
      instructionCount += 1;
      instructions.push(curr);
    }

    const currUser = request.cookies.username;
    const queryString = 'INSERT INTO recipes (name, description, image, prep_time, cook_time, ingredients, instructions, contributor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

    const values = [request.body.name, request.body.description, `/images/${request.file.originalname}`, request.body.prep_time, request.body.cook_time, { items: ingredients }, { steps: instructions }, currUser];

    dbPoolInstance.query(queryString, values, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  const updateOne = (request, callback) => {
    const ingredients = [];
    const instructions = [];

    let ingredientCount = 1;
    while (true) {
      const curr = request.body[`ingredient-${ingredientCount}`];
      if (!curr) {
        break;
      }
      ingredientCount += 1;
      ingredients.push(curr);
    }

    let instructionCount = 1;
    while (true) {
      const curr = request.body[`instruction-${instructionCount}`];
      if (!curr) {
        break;
      }
      instructionCount += 1;
      instructions.push(curr);
    }

    if (request.file) {
      const queryString = `UPDATE recipes SET name=$1, description=$2, image=$3, prep_time=$4, cook_time=$5, ingredients=$6, instructions=$7 WHERE id=${request.params.id} RETURNING *`;

      const values = [request.body.name, request.body.description, `/images/${request.file.originalname}`, request.body.prep_time, request.body.cook_time, { items: ingredients }, { steps: instructions }];

      dbPoolInstance.query(queryString, values, (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, result.rows);
        }
      });
    } else {
      const queryString = `UPDATE recipes SET name=$1, description=$2, prep_time=$3, cook_time=$4, ingredients=$5, instructions=$6 WHERE id=${request.params.id} RETURNING *`;

      const req = request.body;
      const values = [req.name, req.description, req.prep_time, req.cook_time,
        { items: ingredients },
        { steps: instructions }];

      dbPoolInstance.query(queryString, values, (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, result.rows);
        }
      });
    }
  };

  const deleteOne = (request, callback) => {
    const queryString = `DELETE FROM recipes WHERE id=${request.params.id}RETURNING *`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  return {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
  };
};
