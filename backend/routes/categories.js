const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(users);
  }
  catch (err) { res.json({ message: err }) }
})

router.post('/', async (req, res) => {
  const category = new Category({
    category: req.params.category,
    status: req.params.status
  });
  try {
    const savedCategory = await category.save();
    res.json(savedCategory);
  }
  catch (err) { res.json({ message: err }) }
});

module.exports = router;
