// Import the fs module
var fs = require('fs');

console.log('Going to get file info');

fs.stat('input.txt', function(err, stats) {
    if (err) {
        console.error(err);
    }
    console.log('Got file info successfully!:\n');
    console.log(stats);

    // Check file type

    console.log("\nFile type: \n  File: " + stats.isFile() +
    "\n  Directory: " + stats.isDirectory());
    
});

