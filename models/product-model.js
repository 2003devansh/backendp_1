// src/models/product.js

const mongoose = require('mongoose');



const productSchema = mongoose.Schema({
  images: {
    type: [String], // Array of strings to store image URLs or paths
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  bgColor: {
    type: String,
    default: '#FFFFFF', // Default background color
    trim: true
  },
  panelColor: {
    type: String,
    default: '#FFFFFF', // Default panel color
    trim: true
  },
  textColor: {
    type: String,
    default: '#000000', // Default text color
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

