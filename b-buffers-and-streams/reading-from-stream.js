// Import the fs module
var fs = require('fs');

var data = '';

// Create a readable stream
var readStream = fs.createReadStream('input.txt');

// Set the encoding
readStream.setEncoding('utf8');

// Handle the stream events
// data, error and end
// binding the events to event listeners

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('error', function (err) {
    console.log(err.stack);
});

readStream.on('end', function () {
    console.log(data);
});

console.log('Prgram ended');
