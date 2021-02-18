module.exports = {
    async sendSms() {
        const accountSid = 'ACaf58f18c6f415c1d6596979bacee9e93';
        const authToken = '38395b10a68f15a2f0957275f476df3a';
        const client = require('twilio')(accountSid, authToken);
        try{
        client.messages
          .create({
             body: 'mejdi: ya a8la omm fil denya nharek zeen nchallah',
             from: '+12568261296',
             to: '+21628800168'
           })
          .then(message => console.log(message.sid)).catch(reason => console.log(reason))
        }catch(error){
           console.log(error)
        }
    }
}