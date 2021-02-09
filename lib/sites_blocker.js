const hosts = require('hosts-etc');

module.exports = {
    async getWeatherApi() {
        return new Promise((resolve, reject) => {
            console.log(hosts.get());
            resolve(true)

        });
    }
}