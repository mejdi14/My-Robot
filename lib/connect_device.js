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
    return new Promise(async (resolve, reject) => {
        inquirer
            .prompt([
                {
                    name: "devices",
                    type: "list",
                    message: "please pick a device",
                    choices: devices.split('\n').slice(1),
                },
            ])
            .then((answer) => {
                console.log((answer.devices.split('\t')[0]))
                attemptConnectionToDevice(answer.devices.split('\t')[0])

            });
        //resolve()
    });
}

async function attemptConnectionToDevice(device_name) {
    return new Promise(async (resolve, reject) => {
        exec(`adb -s ${device_name} shell ip -f inet addr show wlan0`, async (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr[0]}`);
                return;
            }
            setupCommunicationPort(device_name, stdout.split('/24')[0].split(' ').reverse()[0])
            //setupCommunicationPort(stdout.split('/24')[0].split(' ')[this.length - 1])
        });
        //resolve()
    });
}

async function setupCommunicationPort(device_name, device_ip) {
    return new Promise(async (resolve, reject) => {
        exec(`adb -s ${device_name} tcpip 5559`, async (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr[0]}`);
                return;
            }
            console.log(stdout)
            makeItHappens(device_name, device_ip)
        });
        //resolve()
    });
}

async function makeItHappens(device_name, device_ip) {
    return new Promise(async (resolve, reject) => {
        exec(`adb -s ${device_name} connect ${device_ip}:5559`, async (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr[0]}`);
                return;
            }
            console.log(stdout)
        });
        //resolve()
    });
}