const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (dbPoolInstance) => {

    let createOne = (request, callback) => {

        let salt = bcrypt.genSaltSync(saltRounds);
        let hashPassword = bcrypt.hashSync(request.body.password, salt);

        const queryString = `INSERT INTO users (username, password) VALUES ($1, $2);`
        const values = [request.body.username, hashPassword];

        dbPoolInstance.query(queryString, values, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };

    let userLogin = (request, callback) => {

        const queryString = 'SELECT * FROM users WHERE username=$1'
        const values = [request.body.username];

        dbPoolInstance.query(queryString, values, (error, result) => {
            error ? callback(error, null) : callback(null, result.rows);
        })
    };

    return {
        createOne,
        userLogin,
    };

};