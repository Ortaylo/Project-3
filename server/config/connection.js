const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection

module.exports = db;
