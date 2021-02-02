var request = require('request');

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}

request(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        console.log(body)
});