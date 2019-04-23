var React = require('react');

class Layout extends React.Component {
    render(){

        const loginRoute = "/login";
        const logoutRoute = "/recipes";

        return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Josefin+Slab" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <link rel="stylesheet" href="/style.css" type="text/css"></link>
                <title>{this.props.title}</title>
            </head>

            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                  <a class="navbar-brand" href="/recipes">
                    <img src="/logo.png" width="190" height="81" alt="recipen-logo"/>
                  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mr-auto">
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Browse
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Meal Type</a>
                                <a class="dropdown-item" href="#">Cooking Style</a>
                                <a class="dropdown-item" href="#">Seasonal</a>
                                <a class="dropdown-item" href="#">Special Collection</a>
                            </div>
                        </div>
                        <div class="nav-item navbar-nav">
                            <a class="nav-link" href="#">Articles</a>
                        </div>
                        <div class="nav-item navbar-nav">
                            <a class="nav-link" href="/recipes/new">Add New</a>
                        </div>
                    </div>
                        <div class="nav-item navbar-nav">
                            <form action={logoutRoute}>
                                <button class="btn btn btn-secondary my-2 my-sm-0" type="submit" style={{display: 'none'}} id="logout-button">Logout</button>
                            </form>
                            <form action={loginRoute}>
                                <button class="btn btn btn-secondary my-2 my-sm-0" type="submit" style={{display: 'none'}} id="login-button">Login</button>
                            </form>
                        </div>
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search"/>
                      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>
                    {this.props.children}
                <script src="/script.js"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
        </html>
        );
    }
}

module.exports = Layout;