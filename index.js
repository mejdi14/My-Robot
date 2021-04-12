const clear = require('clear');
const logo = require('./lib/my_robot_logo');
const mobile = require('./lib/open_phone');
const send_message = require('./lib/send_message');
const weather = require('./lib/weather');
const joke = require('./lib/jokes');
//const mongo = require('./database/mongo_db');
const send_sms = require('./lib/sms_sender');
const code_wars = require('./lib/code_wars');
const todo_table = require('./lib/todo_table');
const github = require('./lib/github');
const options = require('./lib/options');
const life_goals = require('./lib/life_goals');
const daily_meeting = require('./lib/daily_meeting');
const sites_blocker = require('./lib/sites_blocker');
const ora = require('ora');
const chalk = require('chalk');
var inquirer = require('inquirer');
const anviz = require("node-anviz");

//clear();
(async function () {
  logo.showRobotFace();
/*   let request = new anviz.Request("192.168.100.17");
request.execute("getInformation1", 1).on("error", function(err) {
    console.info("ERROR", err);
}).on("complete", function(res, raw){
    console.info(res, raw);
    request.close();
}); */
  //await mobile.openPhoneAndSwipeToUnlock();
   //await send_message.openWhatsappAndSendMessage();
  await options.showQuestions()
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


