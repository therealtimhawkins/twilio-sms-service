const { sendSmsMessage } = require('../../src/handlers/smsHandler');

describe('smsHandler', () => {
  test('sendSmsMessage sends message when phone number and message given', async () => {
    const twilioClientMock = {
      messages: {
        create: createFunction
      }
    };
    const result = await sendSmsMessage('Test Message', '07930761693', twilioClientMock)
    expect(result).toEqual('Test Message');
  });
});

const createFunction = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params.body);
    }, 1000)
  });
}