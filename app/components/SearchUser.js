var React = require('react');

var SearchUser = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <h1>GitHub on React</h1>
                        <p>Esta é uma aplicação apenas com fins de aprendizado.</p>
                        <p>Preencha abaixo um username do GitHub:</p>
                    </div>

                    <div className="row">
                        <form className="col-md-6 no-pd">
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="username">@</span>
                                <input
                                 type="text"
                                 placeholder="Username"
                                 className="form-control"
                                 describedby="username"
                                 ref="username" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit">Buscar</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SearchUser;
