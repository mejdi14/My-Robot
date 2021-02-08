const {exec} = require("child_process");

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
                exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`, (error, stdout, stderr) => {
                    exec(`adb shell am start -a android.intent.action.CALL -d tel:25200660`, (error, stdout, stderr) => {
                    })
                })
            })
        });
    }
};