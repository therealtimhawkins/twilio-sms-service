const express = require('express');
const router = express.Router();

router.get('/number/:number/message/:message', (req, res, next) => {
  try {
    console.log(req.params.number);
    console.log(req.params.message);
    res.status(200).json({ message: 'working' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;