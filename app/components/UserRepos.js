var React = require('react');

var UserRepos = React.createClass({
    getInitialState: function() {
        return {
            reposCount: 0
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState({reposCount: props.repos.length});
    },
    render: function() {
        var reposAll = this.props.repos.map(function(repo, key) {
            return (
                <div className="thumbnail">
                    <h3>
                        {repo.name}
                    </h3>
                    <p>{repo.description}</p>
                    <p>
                        <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                    </p>
                </div>
            );
        });

        return (
            <div className="repos">
                <small>{this.state.reposCount} repositório(s)</small>
                {reposAll}
            </div>
        );
    }
});

module.exports = UserRepos;
