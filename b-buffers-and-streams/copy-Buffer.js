var buffer1 = new Buffer.from('ABC');

// Create an empty  buffer of 3 octets/bytes
var buffer2 = new Buffer.alloc(3);

// Copy buffer1 contents to buffer2
buffer1.copy(buffer2);

console.log('buffer2 contents: ' + buffer2.toString());