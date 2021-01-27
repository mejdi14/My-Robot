const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
  }else{
    console.log(chalk.green('Not a Git repository!'));
  }