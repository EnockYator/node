var buffer1 = new Buffer.from('TutorialsPoint.com');

var buffer2 = new Buffer.from(' is an online learning site');

var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log(`buffer3 content: ` + buffer3.toString());