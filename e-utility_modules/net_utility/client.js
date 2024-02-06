// Import the net module
var server = require('./server.js');
var net = require('net');

// Set server address and port
const serverAdress = '127.0.0.1';
const serverPort = 3000;

// Create a TCP client
const client =  net.createConnection(serverAdress, serverPort, function(){
    console.log("Connected to server");

    
});

// Send data to the server
client.write('Hello, Server!');

// End the connection
client.end();

// Handle data received from the server
client.on('data', function(data){
    console.log("Data received from server: " + data);
});

// Handle the end of the connection
client.on('end', function(){
    console.log("Connection to server closed");
});

// Handle errors
client.on('error', function(err){
    console.error('Server error: ' + err);
});