const mongoose = require('mongoose');

const ResultsSchema = mongoose.Schema({

  "1": Number,

  "2": Number,

  "3": Number,

  "4": Number,
});

module.exports = mongoose.model('Results', ResultsSchema);