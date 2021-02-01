var prompt = require('prompt');
 module.exports = {
 async whoAreYou() {

    var schema = {
        properties: {
          name: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            description: 'insert your name',
            required: true
          },
          lastname: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            description: 'insert your nickname',
          }
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
      console.log('Command-line input received:');
      console.log('  username: ' + result.name);
      console.log('  email: ' + result.nickname);
    });
}
};