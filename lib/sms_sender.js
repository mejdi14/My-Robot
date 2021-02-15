module.exports = {
    async sendSms() {
        const accountSid = 'ACaf58f18c6f415c1d6596979bacee9e93';
        const authToken = 'cf06d9a992a6f480482ffe944ba836ef';
        const client = require('twilio')(accountSid, authToken);
        
        client.messages
          .create({
             body: 'Hello my nigga',
             from: '(256) 826-1296',
             to: '+21623825559'
           })
          .then(message => console.log(message.sid));
    }
}