const { exec } = require("child_process");
var prompt = require('prompt');

module.exports = {
    async findTheRightPackage(target) {
        return new Promise((resolve, reject) => {
            exec("adb shell pm list packages -3", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error.message)
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    reject(error.message)
                    return;
                }
                var result = ""
                for (var package of stdout.split("\n")) {
                    if (package.toLowerCase().includes(target))
                    result = package
                }
                resolve(result.split(":")[1]);
            })
        });
    }
};