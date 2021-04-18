var mongoose = require('mongoose');
var express = require('express');
var secret = require('./config/secret');
const uri = secret.database;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established');
});
var app = express();
app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port ' + 4000);
  }
});
