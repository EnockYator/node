// Import the fs module
var fs = require('fs');

// Create a readStream
var readStream =
fs.createReadStream('input.txt', function(err, data) {
    if (err) {
        return console.log(err.stack);
    }
    
});

// Handle readStream events
readStream.on('data', function(data) {
    console.log('\nFile read:');
    console.log(data.toString() + '\n');
       
});
readStream.on('error', function(err) {
    console.log(err.stack);
});

// Create a writeStream
var writeStream =
fs.createWriteStream('output.txt', function (err, data) { 
    if (err) {
        return console.log(err.stack);
    } 
});

// Handle writeStream events
writeStream.on('finish', function() {
    console.log('File written successfully');
});

readStream.pipe(writeStream);

console.log('Program ended');