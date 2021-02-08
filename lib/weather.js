const request = require('request');
module.exports = {
    async getWeatherApi() {
        return new Promise((resolve, reject) => {
            let apiKey = '73cd93be0c8a3b4aff24e033ded4e1be';
            let url = `http://api.openweathermap.org/data/2.5/weather?q=sfax&units=mertric&appid=${apiKey}`

            request(url, function (err, response, body) {
                if (err) {
                    console.log('error:', error);
                } else {
                    let weather = JSON.parse(body)
                    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                    console.log(body);
                    resolve(body)
                }
            });
        });
    }
}
