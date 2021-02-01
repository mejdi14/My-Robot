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

    //
    // Get two properties from the user: username and email
    //
    prompt.get(schema, function (err, result) {
      //
      // Log the results.
      //
      exec(`adb shell am start -a android.intent.action.CALL -d tel:58789632`)
    });
}
};