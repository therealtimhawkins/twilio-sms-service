const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);

const sendSmsMessage = (message, number, twilioClient) => {
  if (!twilioClient) {
    twilioClient = client;
  };

  if (typeof message != 'string') {
    return Error('Message must be a string.');
  };

  if (typeof number != 'string') {
    return Error('Number must be a string.');
  };

  return twilioClient.messages
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