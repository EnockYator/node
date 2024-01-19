// Import the fs module and
// allocate memory buffer of 1024 bytes


var fs = require("fs");
var buf = new Buffer.alloc(1024);


// Open existing file
console.log("\nGoing to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        Console.error(err);
    }

    console.log("File opened successfully!");

    // Read file before truncating
    console.log("\nGoing to read file before truncating");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.error(err);
        }

        console.log("File read successfully!");
        
        // Print only read bytes to avoid junk
        if (bytes > 0) {
            console.log(bytes + " bytes read");
        }

        // File contents
        console.log("\nFile contents: \n    " + buf.slice(0, bytes).toString());
        console.log("\n**********************************************************");

        // Truncate the opened file
        console.log("\nGoing to truncate the file after 10 bytes");
        fs.ftruncate(fd, 10, function(err){
            if (err) {
                console.error(err);
            }
            
            console.log("File truncated successfully!");

            // Close the file
            console.log("\nGoing to close the file");
            fs.close(fd, function(err){
                if (err) {
                    console.error(err);
                }

                console.log("File closed successfully!");
            });
            
            // Open the file again after truncation
            console.log("\n**********************************************************");
            console.log("\nGoing to open the file again after truncating");
            fs.open('input.txt', 'r+', function(err, fd){
                if (err){
                    console.error(err);
                }

                console.log("File opened successfully!");
                
                // Read file
                console.log("\nGoing to read file");
                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                    if (err){
                        console.error(err);
                    }
                    
                    console.log("File read successfully!");
                    
                    // Print only read bytes from the buffer
                    if(bytes > 0){
                        console.log(bytes + " bytes read");
                    }

                    // File content
                    console.log("\nFile contents: \n   " + buf.slice(0, bytes).toString());
                    console.log("\n**********************************************************");

                    // Close the file
                    console.log("\nGoing to close file");
                    fs.close(fd, function(err){
                        if (err){
                            console.error(err);
                        }

                        console.log("File closed successfully!");
                    });
                });
            });
        });
    });
});

