const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const smsRouter = require('./src/routers/smsRouter');

app.use('/sms', smsRouter);

app.use((error, _, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = app;