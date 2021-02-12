const moment = require('moment')

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
                    let lastTime = result.data[0].completedAt != null ? result.data[0].completedAt.split("T")[0] : "1999-01-01"
                    console.log(lastTime)
                    let today = moment().format('YYYY-MM-DD');
                    if (today == lastTime) resolve(true)
                    else resolve(false)
                }
            });
        });
    }
}