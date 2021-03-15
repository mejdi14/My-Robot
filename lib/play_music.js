const { exec } = require("child_process");

module.exports = {
    openWhatsappAndSendMessage: async function () {
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
                var spotify = ""
                for (var package of stdout.split("\n")) {
                    if (package.toLowerCase().includes('spotify'))
                        spotify = package
                }
                package = `${spotify.split(":")[1]}`;
                exec(`adb shell input keyevent 82 && adb shell input keyevent 66`, (error, stdout, stderr) => {
                    exec(`adb shell input touchscreen swipe 600 600 0 0`, (error, stdout, stderr) => {
                        exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`, (error, stdout, stderr) => {

                            exec(`adb shell input tap 540 2140  `, (error, stdout, stderr) => {
                                exec(`adb shell input text 'mac demarco'`, (error, stdout, stderr) => {

                                })
                            })

                        })
                    })
                })
            })
        });
    }
};