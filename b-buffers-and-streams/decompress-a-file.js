// Import the fs module
var fs = require('fs');

// Import the zlib module
var zlib = require('zlib');

// Read input.txt.gz and decompress to input.txt
fs.createReadStream('output.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('otput2.txt'))   

console.log('File decompressed');