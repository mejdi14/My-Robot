const { exec } = require("child_process");

module.exports = {
    showDevices: async function () {
        return new Promise((resolve, reject) => {
            let package = ""
            exec("adb devices", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    return;
                } 
                console.log(stdout)
            })
        });
    }
};