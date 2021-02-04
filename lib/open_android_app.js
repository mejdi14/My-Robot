const { exec } = require("child_process");

module.exports = {
    openAndroidApp() {
        exec("adb shell input keyevent 224")
        setTimeout(() => {
            exec("adb shell input swipe 100 1000 900 1000")
        }, 1000);
    }
};