const express = require('express');
const { default: mongoose } = require('mongoose');

const schemaPost = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  date: {
    type: String,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  },
  sourceId: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('posts', schemaPost);   // posts is the table name in collection
