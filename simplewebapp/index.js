const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Incoming request');
  res.send('By there');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
