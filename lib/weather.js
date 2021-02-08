const request = require('request');
const argv = require('yargs').argv;
module.exports = {
    async getWeatherApi() {
        let apiKey = '73cd93be0c8a3b4aff24e033ded4e1be';
        let city = argv.c || 'portland';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=sfax&units=imperial&appid=${apiKey}`

        request(url, function (err, response, body) {
            if (err) {
                console.log('error:', error);
            } else {
                let weather = JSON.parse(body)
                let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                console.log(message);
            }
        });
    }
}
