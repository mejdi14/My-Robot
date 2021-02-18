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
                    },
                    {
                        name: "porn",
                        type: "confirm",
                        message: "was you able to not watch porn today?",
                    },
                    {
                        name: "pray",
                        type: "confirm",
                        message: "did you pray to god today?",
                    },
                    {
                        name: "talk_buddy",
                        type: "confirm",
                        message: "did you use talk buddy app to talk to strangers?",
                    },
                    {
                        name: "french",
                        type: "confirm",
                        message: "have you gave a 15 min of your time to learn french",
                    },
                ])
                .then((answer) => {
                    var final_score = answer.wake_up +
                        answer.pray +
                        answer.brilliant +
                        answer.smoking +
                        answer.books +
                        answer.facebook +
                        answer.type_speed +
                        answer.work +
                        answer.porn
                    resolve(final_score)
                });
        })
    }
}