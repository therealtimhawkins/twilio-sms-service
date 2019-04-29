const app = require('../../index'); 
const request = require('supertest');

describe('smsRouter', () => {
  test('get /number/:number/message/:message', (done) => {
    request(app)
      .get(`/sms/number/${process.env.TWILIO_TEST_NUMBER}/message/TestingMessage`)
      .expect(200, done);
  });
});