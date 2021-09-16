var inquirer = require('inquirer');
module.exports = {
    async keypress  () {
        process.stdin.setRawMode(true)
        return new Promise(resolve => process.stdin.once('data', () => {
          process.stdin.setRawMode(true)
          resolve()
        }))
      }
};