const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  uId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);
