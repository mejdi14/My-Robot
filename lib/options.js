var inquirer = require('inquirer');
const joke = require('./jokes');
const weather = require('./weather');
const phone_options = require('./phone_options');
const open_browser = require('./open_browser');
module.exports = {
    async showQuestions() {
        inquirer
            .prompt([
                {
                    name: "questions",
                    type: "list",
                    message: "this is what i can do for you",
                    choices: ["remind me why i am doing this", "Tell me a joke", "controle my phone", "tell me the weather", "open navigator"],
                },
            ])
            .then((answer) => {
                switch (answer.questions) {
                    case 'remind me why i am doing this':

                        break;
                    case 'Tell me a joke':
                        (async function () {
                            await joke.printAJoke()
                        })();
                        break;
                    case 'controle my phone':
                        (async function () {
                            await phone_options.showQuestions()
                            console.log('this ended here')
                            this.showQuestions()
                        })();
                        break;
                    case 'tell me the weather':
                        (async function () {
                            var current_weather = await weather.getWeatherApi();
                        })();
                        break;
                    case 'open navigator':
                        open_browser.openWebPage()
                        break;
                }
            });
    }
}