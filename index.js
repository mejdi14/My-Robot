const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const { exec } = require("child_process");

clear();

console.log(

    "                                       \n"+
   "    ▐▀▄      ▄▀▌   ▄▄▄▄▄▄▄             \n"+
    "   ▌  ▀▄▄▄▄▄▀  ▐▄▀▀ ██ ██ ▀▀▄          \n"+
   "   ▐    ▀ ▀ ▀                 ▀▄        \n"+
   "  ▌               ▄            ▀▄      \n"+
   " ▀█   █▌  █  ▐█   ▀               ▌     \n"+
   " ▀▌      ▀ ▀      ▀▀              ▐   ▄▄\n"+
   "▐                                 ▌▄█ █\n"+
   " ▐                                 █ █▀ \n"+
   "▐                                 █▀   \n"+
   "▐                                 ▌    \n"+
   " ▌                               ▐     \n"+
   " ▐                               ▌     \n"+
   "  ▌                             ▐      \n"+
   "  ▐▄                           ▄▌      \n"+
   "    ▀▄▄▀▀▀▀▀▄▄▀▀▀▀▀▀▀▄▄▀▀▀▀▀▄▄▀        \n")
  
   var package = ""
   exec("adb devices", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    
});

  exec("adb shell input keyevent 224")
  setTimeout(() => {  
  exec("adb shell input swipe 100 1000 900 1000")}, 1000);
  


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
});
setTimeout(() => {  
exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`)}, 1000);
setTimeout(() => {  
exec(`adb shell am start -a android.intent.action.CALL -d tel:58789632`)}, 1000);
