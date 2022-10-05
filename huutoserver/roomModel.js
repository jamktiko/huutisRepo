


const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
  
  "id": Number,

  "kysymys": String,

  "format": String,

  "choices": Object,


});

module.exports = mongoose.model('Room', RoomSchema);