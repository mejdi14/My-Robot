var inquirer = require('inquirer');
const joke = require('./jokes');
const weather = require('./weather');
const phone_options = require('./phone_options');
const connect_phone = require('./connect_device');
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
                            module.exports.showQuestions()
                        })();
                        break;
                    case 'controle my phone':
                        (async function () {
                            //await connect_phone.showDevices()
                            await phone_options.showQuestions()
                            console.log('this ended here')
                            console.clear()
                            module.exports.showQuestions()
                        })();
                        break;
                    case 'tell me the weather':
                        (async function () {
                         await weather.getWeatherApi();
                        })();
                        break;
                    case 'open navigator':
                        open_browser.openWebPage()
                        break;
                }
            });
    },


};

function endTheOperation() {
    main_page.showQuestions()
}