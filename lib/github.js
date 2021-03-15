const { constant } = require('lodash');
const request = require('request');
const constants = require('../helpers/constants');
module.exports = {
    async getGithubEvents() {
        return new Promise((resolve, reject) => {
            let githubUser = constants.github_username
            
            let options = {
                url: 'https://api.github.com/users/mejdi14/events',
                method: 'GET',
                headers: {'user-agent': 'node.js'}
            }

            request(options, function (err, response, body) {
                if (err) {
                    console.log('error:', error);
                    reject(err)
                } else {
                    var result = JSON.parse(body)
                    console.log(result[0]);
                    resolve(body)
                }
            });
        });
    }
}