var path = require('path');

// Normalization
console.log('Normalization : ' +
path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('Join path : ' +
path.join('/test', 'test1', '2slashes/1slash', '/tab', '..'));

// Resolve
console.log('Resolve path : ' +
path.resolve('path_utility.js'));

// extName
console.log('ext name  : ' + path.extname('path_utility.js'));
    