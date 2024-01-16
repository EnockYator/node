// Import the fs module
var fs = require('fs');

// Import zlib
var zlib = require('zlib');

// Create a file and compress the data
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('output.txt.gz'));

console.log('Program ended');

