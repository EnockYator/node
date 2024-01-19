// Import the fs module
var fs = require('fs');

console.log("\nGoing to write into existing file");

// Write into the file
fs.writeFile('input.txt', 'Simple and Easy Learning!', function(err){
    if(err){
        console.error(err);
    }

    console.log("File written successfully!");
    console.log("\nGoing to read the written file");

    // Read the file
    fs.readFile('input.txt', function(err, data){
        if(err){
            console.error(err);
        }

        console.log("File read successfully!\n");
        console.log("File contents: \n  " + data.toString());
    });
});
