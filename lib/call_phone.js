var prompt = require('prompt');
 module.exports = {
 async callSomeone() {
   var name = await getContactName();
   console.log(name);

}
};

async function getContactName() {
  return new Promise((resolve, reject) => {
      var schema = {
          properties: {
              song: {
                  pattern: /^[a-zA-Z\s\-]+$/,
                  message: 'Name must be only letters, spaces, or dashes',
                  description: 'who do you want me to call?',
                  required: true
              }
          }
      };
      prompt.start();
      prompt.get(schema, function (err, result) {
          target = result.song;
          resolve(target);
      });
  });
}