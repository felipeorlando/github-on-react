var React = require('react');
var GitHubService = require('../services/GitHubService');

var SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var username = this.refs.username.value;

        // bind(): bind the this for parent scope
        GitHubService.getUserInfos(username).then(function(response) {
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubService.getUserRepos(username).then(function(response) {
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function() {
        return (
            <div className="jumbotron br-jb">
                <div className="row">
                    <h1>GitHub on React</h1>
                    <p>Esta é uma aplicação apenas com fins de aprendizado.</p>
                    <p>Preencha abaixo um username do GitHub:</p>
                </div>

                <div className="row">
                    <form className="col-md-6 no-pd" onSubmit={this.handleSubmit}>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon" id="username">@</span>
                            <input
                             type="text"
                             placeholder="Username"
                             className="form-control"
                             ref="username" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">Buscar</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchUser;
