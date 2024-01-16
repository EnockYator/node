// loading the core modules
var http = require('http');
const port = 3000;

//creating the web server with response handler
var server = http.createServer( function(requests, responses){
    
    // setting right header and status code
    responses.writeHead(200, { 'content-Type': 'text/plain' });
    responses.write('Hello there!');
    responses.end();
});

// make server accept requests
server.listen(port, function(){
    console.log('Server running at http://localhost: %d', port);
});

