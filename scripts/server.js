const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Node.js');
});

server.listen(5000, () => console.log('Server job'));