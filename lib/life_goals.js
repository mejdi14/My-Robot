var inquirer = require('inquirer');
module.exports = {
    async showQuestions() {
        inquirer
            .prompt([
                {
                    name: "deep",
                    type: "list",
                    message: "what you wann be:",
                    choices: ["The greatest of all time", "a god like person", "Just a normal stupid human"],
                },
            ])
            .then((answer) => {
                console.log(answer.deep == "The greatest of all time" ? "well this well take a lot of work" : "well that's easy to do lol");
            });
    }
}