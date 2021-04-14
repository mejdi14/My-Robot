const request = require('request');
const chalk = require("chalk");
module.exports = {
    async printAJoke() {
        return new Promise((resolve, reject) => {
            let options = {
                url: 'https://v2.jokeapi.dev/joke/Dark',
                method: 'GET'
            }

            request(options, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    var joke = JSON.parse(body)
                    switch (joke["type"]) {
                        case "single":
                            console.log(chalk.white(joke["joke"]))
                            break;
                        case "twopart":
                            console.log(chalk.white(joke["setup"] + "\n" + joke["delivery"]))
                            break;
                        default:
                            break;
                    }
                }
                resolve(body)
            });
        });
    }
}