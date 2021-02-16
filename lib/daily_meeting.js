var inquirer = require('inquirer');
module.exports = {
    async startDailyMeeting() {
        return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    name: "wake_up",
                    type: "confirm",
                    message: "did you wake up early today?",
                  },
                  {
                    name: "brilliant",
                    type: "confirm",
                    message: "did you do a brilliant's questionner today?",
                  }
            ])
            .then((answer) => {
                console.log(answer.wake_up + " and " + answer.brilliant);
                resolve(true)
            });
    })
}
}