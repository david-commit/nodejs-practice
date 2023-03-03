const Post = require('../models/post')

// GET Requst
exports.getPosts = (req, res) => {
  res.json({
    greeting: 'Hello Node JS',
    salutation: 'Hi mister',
    array: [1, 2, 3, 4],
    greting: 'Hello Node JS',
    saluttion: 'Hi mister',
    arry: [1, 2, 3, 4],
  });
};

// POST Request
exports.createPost = (req, res) => {
 const post = new Post(req.body)
 console.log(`Request body: ${post.body}`)
 console.log(`Creating POST ${post}`)
}