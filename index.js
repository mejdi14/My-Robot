const clear = require('clear');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
const code_wars = require('./lib/code_wars');
const sites_blocker = require('./lib/sites_blocker');
clear();
(async function () {
    await sites_blocker.checkIfAlreadyBlocked().then(function (result){
        console.log("your result is " + result)
    })
   // await code_wars.checkForCodeWarsTasks()
 /*   await weather.getWeatherApi();
    await joke.printAJoke();
    await mobile.openPhoneAndSwipeToUnlock();
    logo.showRobotFace();*/
})();


