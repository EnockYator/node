var buffer1 = new Buffer.from('TutorialsPoint');

// Slicing buffer1 contents to buffer2
var buffer2 = buffer1.slice(0, 9);

console.log('buffer1 contents: ' + buffer1.toString());
console.log('buffer2 contents: ' + buffer2.toString());
console.log('\n');

// Length of buffers
console.log('length of buffer1: ' + buffer1.length);
console.log('length of buffer2: ' + buffer2.length);
console.log('\n');

