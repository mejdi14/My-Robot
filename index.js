const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const options = require('./lib/options');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
const questions = require('./lib/questions');
const {exec} = require("child_process");

clear();

//options.showOptionsList();

(async function () {
    await weather.getWeatherApi();
    await joke.printAJoke();
    await mobile.openPhoneAndSwipeToUnlock();
    logo.showRobotFace();


})();


