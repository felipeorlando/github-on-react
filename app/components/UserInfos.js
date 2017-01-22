var React = require('react');
var UserRepos = require('./UserRepos');

var UserInfos = React.createClass({
    render: function() {
        var user = this.props.user;

        if (user) {
            return (
                <div className="row">
                    <div className="col-md-4">
                        <div className="user-info">
                            <div className="thumbnail">
                                <img src={user.avatar_url}/>
                                <h1>{user.name}</h1>
                                <p>{user.location}</p>
                                <p>
                                    <a href="{user.html_url}" target="_blank">
                                        @{user.login}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <UserRepos repos={this.props.repos} />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
});

// to study: React PropTypes
// UserInfos.propTypes = {
//     user: React.propTypes.object,
//     // repos: React.propTypes.array
// };

module.exports = UserInfos;
