const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);

const sendSmsMessage = (message, number) => {
  client.messages
    .create({
      from: `+447480802881`,
      body: message,
      to: number
    })
    .then(message => console.log(message));
};

module.exports = {
  sendSmsMessage
}