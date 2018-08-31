const express = require('express');
const app = express();
const ipfs_middleware = require('./ipfs_middleware')
const ipfs_obj = new ipfs_middleware();
var router = express.Router();
app.use('/api/v0',router);

app.get('/', (req,res) => {
    res.send('Hello world');
});

// PORT
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}... `)
})

app.get('/api/v0/peers', (req,res) => {
    ipfs_obj.listPeers((callback) => {        
        res.send(callback);
    });
});