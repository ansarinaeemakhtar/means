const express = require('express');
const mongoose = require('mongoose');

const schemaSource = mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('sources', schemaSource);
