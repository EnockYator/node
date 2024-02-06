/************************
 * 
 * Only use net.createServer when 
 * in need of low level control and 
 * implimenting other protocols other 
 * than http
 * 
 * Otherwise http.createSever is preffered
 * for creating web apllications because of 
 * its high level abstraction
 * 
 * ***********************/

// Import the net module
var net = require('net');

// Create TCP server
const server = net.createServer(function(socket){
    // New connection established
    console.log("Client connected");
    
    // Handle data received from the client
// Binding data event to a function
socket.on('data', function(data) {
console.log("Data received: " + data);
});



// Handle client connection termination
socket.on('end', function(){
console.log("Client disconnected");
});

// Handle errors
socket.on('error', function(err){
console.error("Socket error: " + err);
});
});

// Handle server listening event
server.on('listening', function(){
    const address = server.address();
    console.log("Server listening on " + address.address + ":" + address.port);
});

// Handle server error event
server.on('error', function(err){
    console.error("Server error: " + err);
});

// Handle server close event
server.on('close', function(){
    console.log("Server closed");
});

// Handle server connection event
server.on('connection', function(socket){
    var clientAddress = socket.remoteAddress + ":" + port;
    console.log("New client connected: " + clientAddress);
});

// Start the server and listen on a specific port
const port = 3000;
server.listen(port, function(){
    console.log("Server listening on port: " + port);
});