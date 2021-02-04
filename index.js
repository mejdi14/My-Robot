const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const options = require('./lib/options');
const logo = require('./lib/my_robot_logo');
const joke = require('./lib/jokes');
const questions = require('./lib/questions');
const { exec } = require("child_process");

clear();

logo.showRobotFace();
options.showOptionsList();
  
 /*  var package = ""
   exec("adb devices", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    
});*/
//joke.printAJoke();

   //questions.whoAreYou()

  /*
  


  exec("adb shell pm list packages -3", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr[0]}`);
        return;
    }
    package = `${stdout.split("\n")[1].split(":")[1]}`;
});*/




/*setTimeout(() => {  
exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`)}, 1000);
setTimeout(() => {  
exec(`adb shell am start -a android.intent.action.CALL -d tel:25200660`)}, 1000);*/
