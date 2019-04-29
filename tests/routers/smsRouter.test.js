const app = require('../../index'); 
const request = require('supertest');

describe('smsRouter', () => {
  test('get /number/:number/message/:message', (done) => {
    request(app)
      .get(`/sms/number/${process.env.TWILIO_TEST_NUMBER}/message/TestingMessage`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.body).toEqual('Sent from your Twilio trial account - TestingMessage');
        done();
      });
  });
});