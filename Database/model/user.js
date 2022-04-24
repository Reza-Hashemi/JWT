const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  fullname:{
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Users', userSchema);
