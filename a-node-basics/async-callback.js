// Import the fs module
var fs = require('fs');

// Asynchronous function to read file
// with a callback function
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log('Program ended');