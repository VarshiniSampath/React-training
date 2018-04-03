require('babel-register');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/publications', { useMongoClient: true }, () => {
  console.log('MongoDB connected');
});

require('./controllers/routes.js')(server);

server.listen(4000);
console.log('GraphQL is running');
