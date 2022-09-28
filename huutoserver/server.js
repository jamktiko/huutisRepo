const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const io = require('socket.io')(3000);
const mongoose = require('mongoose');
const Results = require('./resultsModel');
app.use(bodyParser.json());

io.on('vote', () => {
  Results.updateOne({ _id: '63317e13e2ced934c77a9d96' }, { $inc: { 1: 1 } });
});

mongoose.connect(
  'mongodb+srv://huutis:huutis123@cluster0.bo0ayql.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  function (err) {
    if (err) {
      throw err;
    }
    console.log('Database connected');
  }
);
