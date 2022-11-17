const express = require('express');
const mongoose = require('mongoose');

const schemaCategory = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('categories', schemaCategory);
