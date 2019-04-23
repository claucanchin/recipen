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
                    <script src="/script.js"></script>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
        </html>
        );
    }
}

module.exports = Login;