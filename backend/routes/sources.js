const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Source = require('../models/Source');

router.get('/', async (req, res) => {
  try {
    const sources = await Source.find();
    res.json(sources);
  }
  catch (err) { res.json({ message: err }) }
})

router.get('/:id', async (req, res) => {
  try {
    const source = await Source.findById(req.params.id)
    res.json(source)
  }
  catch (err) { res.json({ message: err }) }
});

router.post('/', async (req, res) => {
  const source = new Source({
    source: req.body.source,
    status: req.body.status
  });
  try {
    const savedSource = await source.save();
    res.json(savedSource);
  }
  catch (err) { res.json({ message: err }) }
});


module.exports = router;
