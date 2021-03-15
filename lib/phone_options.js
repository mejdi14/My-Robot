const clear = require('clear');
var inquirer = require('inquirer');
const send_message = require('./send_message');
module.exports = {
    async showQuestions() {
        clear()
        inquirer
            .prompt([
                {
                    name: "phone",
                    type: "list",
                    message: "what we should make your phone do",
                    choices: ["send a message to someone", "make a call", "play music", "block all the stupid apps"],
                },
            ])
            .then((answer) => {
                switch (answer.phone) {
                    case 'send a message to someone':
                        (async function () {
                            await send_message.openWhatsappAndSendMessage();
                        })();
                        break;
                    case 'send a message to someone':
                        (async function () {
                            await send_message.openWhatsappAndSendMessage();
                        })();
                        break;
                }
            });
    }
}