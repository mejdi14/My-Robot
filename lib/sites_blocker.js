const hosts = require('hosts-etc');
const hostile = require("hostile");

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
    }
}