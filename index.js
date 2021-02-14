const clear = require('clear');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
const code_wars = require('./lib/code_wars');
const life_goals = require('./lib/life_goals');
const sites_blocker = require('./lib/sites_blocker');
const ora = require('ora');
const chalk = require('chalk');
var inquirer = require('inquirer');
//const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();


//clear();
(async function () {
/*     await sites_blocker.checkIfAlreadyBlocked().then(function (result) {
        console.log("your result is " + result)
    })
     var hasBeenDone = await code_wars.checkForCodeWarsTasks() */
    // console.log(hasBeenDone)
     await life_goals.showQuestions()
    /*   await weather.getWeatherApi();
       await joke.printAJoke();
       await mobile.openPhoneAndSwipeToUnlock();
       logo.showRobotFace();*/
})();


