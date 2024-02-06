// Import events and domain modules
var events = require('events');
var domain = require('domain');

// Create eventEmitter object
var emitter1 = new events.EventEmitter();

// Create a domain object1
var domain1 = domain.create();


// Bind error event to function on domain context
domain1.on('error', function(err){
    console.log("domain1 handled this error: " + err.message);
});


// Explicit binding
domain1.add(emitter1);

// Bind error event to a function on the context of listener
emitter1.on('error', function(err){
    console.log("listener handled this error: " + err.message);
});

emitter1.emit('error', new Error('To be handled by domain1'));



var domain2 = domain.create();

domain2.on('error', function(err) {
    console.log("domain2 handled this error: " + err.message);
});

// Implicit binding

domain2.run(function(err) {
    var emitter2 = new events.EventEmitter();
    emitter2.emit('error', new Error('To be handled by domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));