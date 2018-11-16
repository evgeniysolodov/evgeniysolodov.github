const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get post
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add post
router.post('/', async (req, res) => {console.log(req)
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.name,
        createdAt: new Date()
    });
    res.status(201).send();
});


// Delete Post

router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send();
})

async function  loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://abc123:abc123@ds111608.mlab.com:11608/dbfirst', {
      useNewUrlParser: true
});

return client.db('dbfirst').collection('todo');
}

module.exports = router;