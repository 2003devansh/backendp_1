// src/models/user.js

const mongoose = require('mongoose');
const { type } = require('os');


const ownerSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  products: {
    type: Array,
    default: []
  },
  contact: {
    type: String,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  },
  gstin: {
    type: String
  }
});

module.exports = mongoose.model('owner', ownerSchema);


