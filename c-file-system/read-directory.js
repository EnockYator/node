// Import the fs module
var fs = require('fs');

console.log("Going to read /test directory");

fs.readdir('./test', function(err, files){
    if (err) {
        console.error(err);
    }

    files.forEach(function(file){
        console.log(file);
    });
});