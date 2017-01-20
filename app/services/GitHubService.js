var axios = require('axios');

GitHubService = {
    getUserInfos: function(username) {
        return axios.get('https://api.github.com/users/' + username);
    },
    getUserRepos: function(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
};

module.exports = GitHubService;
