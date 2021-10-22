'use strict';

const express = require('express');

const app = express();

app.use(express.json());

// app.get('/clothes');
// app.get('/clothes');
// app.post('/clothes');
// app.put('/clothes');
// app.delete('/clothes');

// app.get('/food');
// app.get('/food');
// app.post('/food');
// app.put('/food');
// app.delete('/food');

module.export = {
  app, 
  start:(port) => {
    app.listen
  }
}