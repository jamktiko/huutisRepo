const app = require('express')();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
require('dotenv').config()

const Results = require('./resultsModel');
const Room = require('./roomModel')
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

mongoose.connect(

  process.env.MONGO_URI,

  { useNewUrlParser: true },

  function (err) {

    if (err) {

      throw err;

    }

    console.log('Database connected');

  }

);

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('msg', (msg) => {
    console.log('message: ' + msg);
    Room.insertMany([{"id":msg.id,"kysymys":msg.kysymys,"format":msg.format, "choices":msg.choices}]);
  });

  socket.on('vote', (data) => {

    // Results.insertMany([{7:"1"}, {8:"1"}])

    console.log("Tässä on data millä haetaan mongosta inkrementoitava vaihtoehto: " + data)

    Room.findOneAndUpdate({"id":[]})

    // Results.findByIdAndUpdate('633198d326a54a0bb52c898e' , { $inc: { '1': 1 } })
    .then((doc) => {
      console.log('Documents data ' , {...doc});
    })
    .catch((err) => {
      console.error(err);
    });
  
  });

  socket.on('my message', (msg) => {
    io.emit('my broadcast', `server: ${msg}`);
  });

  socket.on('fetch', (id) => {
    Room.find({"id":id})
    .then((data) =>{
      socket.emit("data", data)
      console.log("Tässä on tiedot mitä emitoidaan id:n perusteella: " + data)
    })
  });


  
});



http.listen(3000, () => {
  console.log('listeninghttp on *:3000');
});