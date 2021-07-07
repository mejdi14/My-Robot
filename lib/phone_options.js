const clear = require('clear');
var inquirer = require('inquirer');
const send_message = require('./send_message');
const play_music = require('./play_music');
const call_phone = require('./call_phone');
module.exports = {
    async showQuestions() {
        return new Promise((resolve, reject) => {
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
                            resolve()
                        })();
                        break;
                    case 'play music':
                        (async function () {
                            await play_music.openSpotifyAndPlayASong();
                            resolve()
                        })();
                        break;
                         case 'make a call':
                        (async function () {
                            await call_phone.callSomeone();
                            resolve()
                        })();
                        break;
                }
            });
        });
    }
}