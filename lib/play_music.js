const { exec } = require("child_process");
var prompt = require('prompt');
const play_music = require('./package_finder');
const open_android_app = require('./open_android_app');
const package_finder = require("./package_finder");

module.exports = {
    async openSpotifyAndPlayASong() {
        var target;
        target = await getSongName(target)
        var package = await package_finder.findTheRightPackage('spotify');
     
        return new Promise( async (resolve, reject) => {
            exec(`adb shell input keyevent 82 && adb shell input keyevent 66`, (error, stdout, stderr) => {
                exec(`adb shell input touchscreen swipe 600 600 0 0`, async (error, stdout, stderr) => {
                    //await openTheApp(package, target);
                    await openTheApp(package, target)
                    resolve()
                })
            })
        });
    }
};``

 async function openTheApp(package, target) {
    return new Promise( async (resolve, reject) => {
    await closeAppIfOpen(package)
    await open_android_app.openAndroidApp(package)
    await sleep(2000)
    await startOperatingOnApp(target);
    resolve()
    });
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function closeAppIfOpen(package) {
    return new Promise((resolve, reject) => {
        exec(`adb shell pidof ${package}`, (error, stdout, stderr) => {
            if (!(stdout == '')) {
                exec(`adb shell am force-stop ${package}`, (error, stdout, stderr) => {
                    resolve(stdout)
                });
            }else(
                resolve(stdout)
            )
        });
    });
}

function startOperatingOnApp(target) {
    console.log('we entered here')
    return new Promise((resolve, reject) => {
        exec(`adb shell input tap 540 2140`, (error, stdout, stderr) => {
            exec(`adb shell input tap 500 600`, (error, stdout, stderr) => {
                exec(`adb shell input text '${target}'`, (error, stdout, stderr) => {
                    exec(`adb shell input tap 500 250`, (error, stdout, stderr) => {
                        exec(`adb shell input tap 550 1070`, (error, stdout, stderr) => {
                          resolve()
                        });
                    });
                });
            });
        });
    });
}

async function getSongName(target) {
    return new Promise((resolve, reject) => {
        var schema = {
            properties: {
                song: {
                    pattern: /^[a-zA-Z\s\-]+$/,
                    message: 'Name must be only letters, spaces, or dashes',
                    description: 'who or what you want to listen to',
                    required: true
                }
            }
        };
        prompt.start();
        prompt.get(schema, function (err, result) {
            target = result.song;
            resolve(target);
        });
    });
}
