const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({_id: -1});
    res.json(posts);
  }
  catch(err){ res.json({ message: err }) }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  }
  catch(err){ res.json({ message: err }) }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id });
    res.json(deletedPost);
  }
  catch (err) { res.json({ message: err }) }
});

router.post('/', async (req, res) => {
  console.log('req', req);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    status: req.body.status,
    sourceId: req.body.sourceId
  });
  console.log(req.body);
  
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  }
  catch(err) { res.json({ message: err }) }
});

router.patch('/:postId', async (req, res) => {
  console.log(req.body.postId);
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.body.postId },
      { $set: {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        status: req.body.status,
        sourceId: req.body.sourceId
      }}
    );
    res.json(updatedPost);
  }
  catch(err) { res.json({ message: err }) }
});

module.exports = router;
