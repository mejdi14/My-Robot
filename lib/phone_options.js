var inquirer = require('inquirer');
const send_message = require('./send_message');
module.exports = {
    async showQuestions() {
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
                switch(answer.phone){
                    case 'send a message to someone': 
                    await send_message.openWhatsappAndSendMessage();
                    break;

                }
            });
    }
}