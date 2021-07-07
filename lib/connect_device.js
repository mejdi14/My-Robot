const { exec } = require("child_process");
var inquirer = require('inquirer');

module.exports = {
    async showDevices() {
        return new Promise((resolve, reject) => {
            let package = ""
            exec("adb devices", async (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr[0]}`);
                    return;
                } 
                await listTheDevices(stdout)
                console.log(stdout)
            })
        });
    },
   

};

async function listTheDevices(devices) {
    return new Promise( async (resolve, reject) => {
        inquirer
        .prompt([
            {
                name: "questions",
                type: "list",
                message: "this is what i can do for you",
                choices: devices.split('\n').slice(1),
            },
        ])
        .then((answer) => {
          console.log((answer.toString()).split(/[.\-_]/)[0].toString())
        });
    //resolve()
    });
}