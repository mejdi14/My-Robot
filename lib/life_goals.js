var inquirer = require('inquirer');
module.exports = {
    async showQuestions(){
inquirer.prompt([
    ['are you ok today?', 'did you pray tonight']
  ])
  .then(answers => {
    console.log(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
}
}