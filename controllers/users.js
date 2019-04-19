const bcrypt = require('bcrypt');
const sha256 = require('js-sha256');

module.exports = (db) => {

    let registerForm = (request,response) => {
        response.render('users/register')
    };

    let registered = (request, response) => {
        db.users.createOne(request, (error, users) => {
            if (error) {
                response.send("Got error. Aiyo");
            } else {
                response.send('Account created!</br><a href="/login">Click here to login</a>');
            }
        })
    };

    let loginForm = (request,response) => {
        response.render('users/login')
    };

    let loggedIn = (request,response) => {
        db.users.userLogin(request, (error, users) => {
            if (error) {
                response.send("Login Error");
            } else if (users.length === 1) {
                if (bcrypt.compareSync(request.body.password, users[0].password)) {

                    var visits = request.cookies['visits'];
                    if (visits === undefined) {
                        visits = 1;
                    } else {
                        visits = parseInt(visits) + 1;
                    }
                    response.cookie('visits', visits);

                    const SALT = "not all lobsters are angry";
                    let currentSessionCookie = sha256 (users[0].username + SALT);

                    response.cookie('username', users[0].username);
                    response.cookie('logged_in', currentSessionCookie);

                    response.send('You are logged in!</br><a href="/recipes">Click here to start browsing recipes.</a>');

                } else {
                    console.log("Password is incorrect.");
                    response.send("Incorrect Username or Password.");
                }
            } else {
                console.log("Username is incorrect.");
                response.send("Incorrect Username or Password.")
            }
        })
    };


    return {
        registerForm: registerForm,
        registered: registered,
        loginForm: loginForm,
        loggedIn: loggedIn,
    };

};