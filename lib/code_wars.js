const request = require('request');
module.exports = {
    async checkForCodeWarsTasks() {
        return new Promise((resolve, reject) => {
            let url = `https://www.codewars.com/api/v1/users/mejdi/code-challenges/completed`
            request(url, function (err, response, body) {
                if (err) {
                    console.log('error:', error);
                } else {
                    let result = JSON.parse(body)
                    console.log(result.data[0]);
                    resolve(body)
                }
            });
        });
    }
}