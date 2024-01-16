// Import fs module
var fs = require('fs');

var data = 'Easy Pizzy';

// Create a write stream
var writeStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding utf-8
writeStream.write(data, 'UTF8');

// Mark the end of file
writeStream.end();

// Handle stream events
//finish and error events

writeStream.on('finish', function(){
    console.log('File written successfully');
});

writeStream.on('error', function(err){
    console.log(err.stack);
});

console.log('Program ended');