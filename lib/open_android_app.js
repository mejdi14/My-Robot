const { exec } = require("child_process");

module.exports = {
    openAndroidApp(package) {
        return new Promise((resolve, reject) => {
            exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`, (error, stdout, stderr) => {
                /* if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    reject(stderr);
                } */
                resolve(stdout);
            });
        });
    }
};