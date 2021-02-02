const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const joke = require('./lib/jokes');
const questions = require('./lib/questions');
const { exec } = require("child_process");
var List = require('term-list');
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
    
});
joke.printAJoke();

   //questions.whoAreYou()

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



var list = new List({ marker: '\033[36m› \033[0m', markerLength: 2 });
list.add('http://google.com', 'Google');
list.add('http://yahoo.com', 'Yahoo');
list.add('http://cloudup.com', 'Cloudup');
list.add('http://github.com', 'Github');
list.start();

list.on('keypress', function(key, item){
  switch (key.name) {
    case 'return':
      exec('open ' + item);
      list.stop();
      console.log('opening %s', item);
      break;
    case 'backspace':
      list.remove(list.selected);
      break;
  }
});

list.on('empty', function(){
  list.stop();
});
setTimeout(() => {  
exec(`adb shell monkey -p ${package} -c android.intent.category.LAUNCHER 1`)}, 1000);
setTimeout(() => {  
exec(`adb shell am start -a android.intent.action.CALL -d tel:25200660`)}, 1000);
