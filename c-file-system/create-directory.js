// Import the fs module
var fs = require('fs');

console.log("Going to create a directory");

fs.mkdir('./test', function(err){
    if (err) {
        console.error(err);
    }

    console.log("Directory created successfully!");
    console.log("Created directory /test");
});