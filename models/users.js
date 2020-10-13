const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = (dbPoolInstance) => {
  const createOne = (request, callback) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(request.body.password, salt);

    const queryString = 'INSERT INTO users (username, password) VALUES ($1, $2);';
    const values = [request.body.username, hashPassword];

    dbPoolInstance.query(queryString, values, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  const userLogin = (request, callback) => {
    const queryString = 'SELECT * FROM users WHERE username=$1';
    const values = [request.body.username];

    dbPoolInstance.query(queryString, values, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });
  };

  return {
    createOne,
    userLogin,
  };
};
