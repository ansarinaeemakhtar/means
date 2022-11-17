const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (err) { res.json({ message: err }) }
})

// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json(user);
//   }
//   catch (err) { res.json({ message: err }) }
// });

router.get('/:email', async (req, res) => {
  try {
    console.log(req.params.email);
    const user = await User.findOne({ email: req.params.email })
    res.json(user);
  }
  catch (err) { res.json({ message: err }) }
});

module.exports = router;
