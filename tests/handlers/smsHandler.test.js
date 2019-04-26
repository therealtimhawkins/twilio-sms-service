const { sendSmsMessage } = require('../../src/handlers/smsHandler');


const createFunction = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params.body);
    }, 1000)
  });
}

describe('smsHandler', () => {
  describe('sendSmsMessage()', () => {
    test('sends message when phone number and message given', async () => {
      const twilioClientMock = {
        messages: {
          create: createFunction
        }
      };
  
      const actual = await sendSmsMessage('Test Message', '07930761693', twilioClientMock);
      const expected = 'Test Message';
      expect(actual).toEqual(expected);
    });
  
    test('returns Error if no message given', () => {
      const twilioClientMock = {
        messages: {
          create: createFunction
        }
      };
  
      const actual = sendSmsMessage(100, '07930761693', twilioClientMock);
      const expected = Error('Message must be a string.');
      expect(actual).toEqual(expected);
    });
  
    test('returns Error if no message given', () => {
      const twilioClientMock = {
        messages: {
          create: createFunction
        }
      };
  
      const actual = sendSmsMessage('Test Message', 100, twilioClientMock);
      const expected = Error('Number must be a string.');
      expect(actual).toEqual(expected);
    });
  });
});
