const bcrypt = require('bcrypt');
const sha256 = require('js-sha256');

module.exports = (db) => {
  const registerForm = (request, response) => {
    response.render('users/register');
  };

  const registered = (request, response) => {
    db.users.createOne(request, (error) => {
      if (error) {
        response.send('Error Registering');
      } else {
        response.send('Account created!</br><a href="/login">Click here to login</a>');
      }
    });
  };

  const loginForm = (request, response) => {
    response.render('users/login');
  };

  const loggedIn = (request, response) => {
    db.users.userLogin(request, (error, users) => {
      if (error) {
        response.send('Login Error');
      } else if (users.length === 1) {
        if (bcrypt.compareSync(request.body.password, users[0].password)) {
          let { visits } = request.cookies;
          if (visits === undefined) {
            visits = 1;
          } else {
            visits = parseInt(visits, 10) + 1;
          }
          response.cookie('visits', visits);

          const SALT = 'not all lobsters are angry';
          const currentSessionCookie = sha256(users[0].username + SALT);

          response.cookie('username', users[0].username);
          response.cookie('logged_in', currentSessionCookie);

          response.redirect('/recipes');
        } else {
          response.send('Incorrect Username or Password.');
        }
      } else {
        response.send('Incorrect Username or Password.');
      }
    });
  };

  return {
    registerForm,
    registered,
    loginForm,
    loggedIn,
  };
};
