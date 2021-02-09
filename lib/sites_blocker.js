const hosts = require('hosts-etc');
const hostile = require("hostile");
import * as blocked_sites from "data/blocked_sites"

module.exports = {
    async hostFileModify() {
        hostile.set("127.0.0.1", "www.facebook.fr")
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
                hostile.set("127.0.0.1", site);
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
    }
}