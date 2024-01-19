// Import fs module and 
//allocate buffer memory
var fs = require('fs');
var buf = new Buffer.alloc(1024);

//open the file
console.log("\nGoing to open file");
fs.open('output.txt', 'r+', function(err, fd) {
    if (err) {
        console.error(err);
    }

    console.log("File opened successfully!");
    console.log("\nGoing to read file");
    
    // read file assynchronously
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.error(err);
        }

        console.log("File read successfully!");

        // Print only read bytes to avoid junk
        if (bytes > 0) {
            console.log(bytes + " bytes read");
        }

        console.log("\nGoing to close file");
    
        // Close file
        fs.close(fd, function(err) {
            if (err) {
                console.error(err);
            }

            console.log("File closed successfully!");
        });
    });
});