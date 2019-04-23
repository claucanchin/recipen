var React = require('react');

class Login extends React.Component {
    render() {
        return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <link rel="stylesheet" href="/style.css"></link>
            </head>

            <body>

                <div class= "login-container">
                        <img src="/logo.png" width="190" height="81" alt="recipen-logo"/>
                        <h4>Login</h4>
                        <p>Welcome back.</p>
                    <div>
                        <a href = "https://www.facebook.com/"><img src="fb-button.png" style={{width:'210px', margin:'10px 0'}} alt="fb button"/></a>
                        <p>or</p>

                        <form method="POST" action="/login">
                            <div style={{'text-align':'left'}}>Username</div>
                            <input name="username" style={{width:'100%', margin:'10px 0'}}/>
                            <div style={{'text-align':'left'}}>Password</div>
                            <input name="password" type="password" style={{width:'100%', margin:'10px 0'}}/>
                            <button type="submit" class="btn btn-dark btn-sm" style={{width:'100%', margin:'10px 0'}}>Login</button>
                        </form>
                        <p>Don't have an account? <a href="/register">Join</a></p>
                    </div>
                </div>
            </body>
        </html>
        );
    }
}

module.exports = Login;