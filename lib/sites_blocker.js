const hostile = require("hostile");
const blocked_sites = require('../data/blocked_sites');
const constants = require('../helpers/constants');
module.exports = {
    async hostFileModify() {
        hostile.set(constants.localhost_ip, "www.facebook.fr")
        var preserveFormatting = false
        hostile.get(preserveFormatting, function (err, lines) {
            if (err) {
                console.error(err.message)
            }
            lines.forEach(function (line) {
                console.log(line) // [IP, Host]
            })
        })
    },
    async blockTheFucker() {
        return new Promise((resolve, reject) => {
            for (let site of blocked_sites.array) {
                hostile.set(constants.localhost_ip, site);
            }
            resolve(true)
        });
    },
    async makeMyNiggaFree() {
        return new Promise((resolve, reject) => {
            for (let site of blocked_sites.array) {
                hostile.remove('127.0.0.1', site, function (err) {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log('set /etc/hosts successfully!')
                    }
                })
            }
            resolve(true)
        });
    },
    async checkIfAlreadyBlocked() {
        return new Promise((resolve, reject) => {
            var preserveFormatting = false
            var result = []
            hostile.get(preserveFormatting, function (err, lines) {
                if (err) {
                    console.error(err.message)
                    resolve(err)
                }
                lines.forEach(function (line) {
                    result.push(line)
                })
                if (result.includes("facebook.com"))
                    resolve(true)
                else
                    resolve(false)
            })
        });
    }
}