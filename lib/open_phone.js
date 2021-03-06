const { exec } = require("child_process");

module.exports = {
    openPhoneAndSwipeToUnlock: async function () {
        return new Promise((resolve, reject) => {
            let package = ""
            exec("adb shell pm list packages -3", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    return;
                }
                package = `${stdout.split("\n")[1].split(":")[1]}`;
                exec(`adb shell input keyevent 82 && adb shell input keyevent 66`, (error, stdout, stderr) => {
                    exec(`adb shell input touchscreen swipe 600 600 0 0`, (error, stdout, stderr) => {
                     resolve(stdout)
                    })
                })
            })
        });
    }
};