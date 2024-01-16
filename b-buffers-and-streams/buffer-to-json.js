var buf = new Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);