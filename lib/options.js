var inquirer = require('inquirer');

module.exports = {
    async showQuestions() {
        inquirer
            .prompt([
                {
                    name: "questions",
                    type: "list",
                    message: "this is what i can do for you",
                    choices: ["remind me why i am doing this", "Tell me a joke", "controle my phone", "sing a song for me", "open navigator"],
                },
            ])
            .then((answer) => {
                console.log(answer.deep == "The greatest of all time" ? "well this well take a lot of work" : "well that's easy to do lol");
            });
    }
}