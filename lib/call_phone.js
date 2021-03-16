var prompt = require('prompt');
const phone_contact = require('./phone_contact');
module.exports = {
  async callSomeone() {
    var name = await getContactName();
    console.log(name);
    phone_contact.fetchFromContactList(name)

  }
};

async function getContactName() {
  return new Promise((resolve, reject) => {
    var schema = {
      properties: {
        contact: {
          pattern: /^[a-zA-Z\s\-]+$/,
          message: 'Name must be only letters, spaces, or dashes',
          description: 'who do you want me to call?',
          required: true
        }
      }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
      if (err) reject(err);
      target = result.contact;
      resolve(target);
    });
  });
}