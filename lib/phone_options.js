var inquirer = require('inquirer');

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
                console.log(answer.deep == "The greatest of all time" ? "well this well take a lot of work" : "well that's easy to do lol");
            });
    }
}