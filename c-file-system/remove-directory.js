// mport the fs module
var fs = require('fs');

console.log("Going to remove /test directory");

fs.readdir('./test', function(err, files) {
    if (err) {
        console.error(err);
    }

    files.forEach(function(file) {
        console.log(file);

        var filePath = "./test/" + file;

        fs.unlink(filePath, function(err) {
            if (err) {
                console.error("File is a directory" + filePath);
            }
            
            fs.rmdir(filePath, function(err) {
            if (err) {
                console.error("File is not a directory");
            }
        });

        });

        
    });
    fs.rmdir('./test', function(err) {
        if (err){
            console.error(err);
        }

        console.log("/test directory removed successfully!"); 
    }); 
});