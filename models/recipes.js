/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        const queryString = 'SELECT * FROM recipes ORDER BY id ASC';

        dbPoolInstance.query(queryString, (error, result) => {

            if (error) {
                callback(error, null);
            } else {
                callback(null, result.rows)
            }
        });
    };

    let getOne = (request, callback) => {

        const queryString = 'SELECT * FROM recipes WHERE id=' + request.params.id;

        dbPoolInstance.query(queryString, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };

    let createOne = (request, callback) => {

        let ingredients = [];
        let instructions = [];

        let ingredientCount = 1;
        while (true) {
            let curr = request.body['ingredient-' + ingredientCount];
            if (!curr) {
                break;
            }
            ingredientCount++;
            ingredients.push(curr);
        }

        let instructionCount = 1;
        while (true) {
            let curr = request.body['instruction-' + instructionCount];
            if (!curr) {
                break;
            }
            instructionCount++;
            instructions.push(curr);
        }

        const currUser = request.cookies.username;
        const queryString = 'INSERT INTO recipes (name, description, image, prep_time, cook_time, ingredients, instructions, contributor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

        const values = [request.body.name, request.body.description, request.body.image, request.body.prep_time, request.body.cook_time, { items: ingredients }, { steps: instructions }, currUser];

        dbPoolInstance.query(queryString, values, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };

    let updateOne = (request, callback) => {

        let ingredients = [];
        let instructions = [];

        let ingredientCount = 1;
        while (true) {
            let curr = request.body['ingredient-' + ingredientCount];
            if (!curr) {
                break;
            }
            ingredientCount++;
            ingredients.push(curr);
        }

        let instructionCount = 1;
        while (true) {
            let curr = request.body['instruction-' + instructionCount];
            if (!curr) {
                break;
            }
            instructionCount++;
            instructions.push(curr);
        }

        const queryString = "UPDATE recipes SET name=$1, description=$2, image=$3, prep_time=$4, cook_time=$5, ingredients=$6, instructions=$7 WHERE id=" + request.params.id + ' RETURNING *';

        const values = [request.body.name, request.body.description, request.body.image, request.body.prep_time, request.body.cook_time, { items: ingredients }, { steps: instructions }];

        dbPoolInstance.query(queryString, values, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };

    let deleteOne = (request, callback) => {

        const queryString = 'DELETE FROM recipes WHERE id=' + request.params.id + 'RETURNING *';

        dbPoolInstance.query(queryString, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };


    return {
        getAll,
        getOne,
        createOne,
        updateOne,
        deleteOne,
    };
};