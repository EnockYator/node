// Buffer of 256 octets/bytes
var buf = new Buffer.alloc(256);

var len = buf.write('Easy and simple learning', 0, 24, 'utf8');

console.log (`Buffer's content: ` + buf.toString());
console.log('Octets written: ' + len);
console.log(`Buffer's total size in bytes: ` + buf.length);

