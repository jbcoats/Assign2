const { O_RDONLY } = require('constants');
var https = require('https');
https.createServer(function (req, res) {
    res.writeHead (200, {
        'Content-Type': 'text/html' 
    });
        res.end('A simple https web server\n');
    }).listen(6000);
    console.log('Server running on 6000');