var inquirer = require('inquirer');
var readline = require('readline');

module.exports = {
    async keypress() {
        return new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('press ENTER to go back', (answer) => {
                rl.close();
                resolve();
            });
        })
    }
};