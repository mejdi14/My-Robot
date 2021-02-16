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
                    },
                    {
                        name: "smoking",
                        type: "confirm",
                        message: "have you stop smoking?",
                    },
                    {
                        name: "books",
                        type: "confirm",
                        message: "did you read at least one page from a book today?",
                    },
                    {
                        name: "facebook",
                        type: "confirm",
                        message: "was you able to never open facebook today?",
                    },
                    {
                        name: "type_speed",
                        type: "confirm",
                        message: "did you make some progress on typeracer today?",
                      },
                      {
                          name: "work",
                          type: "confirm",
                          message: "do you feel good about your work performence today?",
                        }
                ])
                .then((answer) => {
                    console.log(answer.wake_up + " and " + answer.brilliant);
                    resolve(true)
                });
        })
    }
}