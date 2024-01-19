// Reading file using file descriptor (fd)
// fs.read(fd, buffer, offset, length, position, callback)

/**********
 * fd - File descriptor is numeric identifier that 
 * the OS assigns to an open file.
 * 
 * Reading files using file descriptor method
 * provides a low-level interface, allowing for 
 * efficient handling of resources and improved
 * perfomance in certain scenarios compared to 
 * directly reading.
 ********/

// Import the fs module
var fs = require('fs');

// Allocate memory of 1024 bytes
var buf = new Buffer.alloc(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    console.log("File opened successfully!");
    console.log("\nGoing to read the file");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.error(err);
        }

        console.log("File read successfully!");
        console.log(bytes + " bytes read\n");

        // Print only read bytes to avoid junk
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });

});