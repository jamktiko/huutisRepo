const app = require('express')();
const http = require('http').createServer(app);
const mongoose = require('mongoose');


const Results = require('./resultsModel');
const Room = require('./roomModel')
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

mongoose.connect(

  'mongodb+srv://huutis:huutis123@cluster0.bo0ayql.mongodb.net/huutis?retryWrites=true&w=majority',

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
    Room.insertMany([{"kysymys":msg.kysymys,"format":msg.format, "choices":msg.choices}])
  });

  socket.on('vote', () => {

    // Results.insertMany([{7:"1"}, {8:"1"}])

    Results.updateOne({"_id":"6331963a26a54a0bb52c898d"}, {$inc:{"1":1}})

    // Results.findByIdAndUpdate('633198d326a54a0bb52c898e' , { $inc: { '1': 1 } })
    .then((doc) => {
      console.log('Document updated ' , {...doc});
    })
    .catch((err) => {
      console.error(err);
    });
  
  });

  socket.on('my message', (msg) => {
    io.emit('my broadcast', `server: ${msg}`);
  });


  
});



http.listen(3000, () => {
  console.log('listeninghttp on *:3000');
});