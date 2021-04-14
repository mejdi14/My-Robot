const { exec } = require("child_process");

module.exports = {
    async fetchFromContactList(name) {
        exec(`adb shell content query --uri content://contacts/phones/  --projection display_name:number`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                reject(error);
            }
            if (stderr) {
                console.log(`stderr: ${stderr[0]}`);
                reject(stderr);
            }
            console.log('list of contacts : ' + stdout)
            getContactNumber(stdout, name)
        });
        return new Promise((resolve, reject) => {
        });
    }
};

async function getContactNumber(contact_list, name) {
    return new Promise((resolve, reject) => {
        var list = contact_list.split("\n")
        const found = list.find(contact => contact.split(" ")[2].toString().toLowerCase().includes(name.toLowerCase()));
        resolve(found)
    });
}