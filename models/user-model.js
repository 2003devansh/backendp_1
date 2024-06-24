// src/models/user.js

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  contact: {
    type: String,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);


