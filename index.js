const clear = require('clear');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
//const mongo = require('./database/mongo_db');
const send_sms = require('./lib/sms_sender');
const code_wars = require('./lib/code_wars');
const todo_table = require('./lib/todo_table');
const github = require('./lib/github');
const life_goals = require('./lib/life_goals');
const daily_meeting = require('./lib/daily_meeting');
const sites_blocker = require('./lib/sites_blocker');
const ora = require('ora');
const chalk = require('chalk');
var inquirer = require('inquirer');

//clear();
(async function () {
  await mobile.openPhoneAndSwipeToUnlock();
    //await send_sms.sendSms()
    //await github.getGithubEvents()
    // var score = await daily_meeting.startDailyMeeting()
    // console.log(score)
    /*   await sites_blocker.checkIfAlreadyBlocked().then(function (result) {
         console.log("your result is " + result)
     })
     
      var hasBeenDone = await code_wars.checkForCodeWarsTasks()  */

    /*   await daily_meeting.startDailyMeeting()
      await life_goals.showQuestions()  */
    /*    console.log(hasBeenDone)
      /*   await weather.getWeatherApi();
         await joke.printAJoke();
         
         logo.showRobotFace();*/
    //await mongo.getData()
    // await todo_table.showTable()
})();


