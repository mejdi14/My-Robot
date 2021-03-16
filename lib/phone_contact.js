const { exec } = require("child_process");

module.exports = {
    fetchFromContactList(name) {
        return new Promise((resolve, reject) => {
            exec(`adb shell content query --uri content://contacts/phones/  --projection display_name:number`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    reject(stderr);
                }
                console.log('list of contacts : ' + stdout)
                resolve(stdout);
            });
        });
    }
};