const clear = require('clear');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
const code_wars = require('./lib/code_wars');
clear();
(async function () {
    await code_wars.checkForCodeWarsTasks()
 /*   await weather.getWeatherApi();
    await joke.printAJoke();
    await mobile.openPhoneAndSwipeToUnlock();
    logo.showRobotFace();*/
})();


