const express = require('express');
const router = express.Router();
const { sendSmsMessage } = require('../handlers/smsHandler');

router.get('/number/:number/message/:message', async (req, res, next) => {
  try {
    const result = await sendSmsMessage(req.params.message, req.params.number);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;