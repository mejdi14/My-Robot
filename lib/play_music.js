const { exec } = require("child_process");
var prompt = require('prompt');
const play_music = require('./package_finder');

module.exports = {
    async openSpotifyAndPlayASong() {
        var target;
        target = await getSongName(target)
        return new Promise((resolve, reject) => {
            exec(`adb shell input keyevent 82 && adb shell input keyevent 66`, (error, stdout, stderr) => {
                exec(`adb shell input touchscreen swipe 600 600 0 0`, (error, stdout, stderr) => {
                    var package = 
                    openTheApp(package, target);
                })
            })
        });
    }
};

function openTheApp(package, target) {
    exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`, (error, stdout, stderr) => {
        startOperatingOnApp(target);
    });
}

function startOperatingOnApp(target) {
    exec(`adb shell input tap 540 2140`, (error, stdout, stderr) => {
        exec(`adb shell input text '${target}'`, (error, stdout, stderr) => {
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
