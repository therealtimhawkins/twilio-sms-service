const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);

const sendSmsMessage = (message, number) => {
  return client.messages
    .create({
      from: twilioNumber,
      body: message,
      to: number
    })
    .then(message => {
      return message
    });
};

module.exports = {
  sendSmsMessage
};