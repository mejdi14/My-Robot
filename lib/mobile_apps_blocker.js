var prompt = require('prompt');
module.exports = {
  async callSofien() {
    var schema = {
      properties: {
        name: {
          description: 'are you sure you want to call sofien?',
          required: true
        },
      }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
      exec(`adb shell am start -a android.intent.action.CALL -d tel:58789632`)
    });
  }
};