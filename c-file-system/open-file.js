// Import fs module
var fs = require('fs');

console.log('Going to open input.txt file\n');

// Asynchronous file opening
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error('Error opening file: ' + err.message);
    }
    console.log('File opened successfully');
});

