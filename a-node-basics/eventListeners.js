// Import events module
var events = require('events');

// Create eventEmitter object
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function listener1() {
    console.log('listener1 executed');
}

// Listener #2
var listener2 = function listener2() {
    console.log('listener2 executed');
}

// Bind the connection event with listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with listener2 function
eventEmitter.on('connection', listener2);

var eventListeners =
require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners +
    ' listener(s) listening to connection event');

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);

console.log('Listener1 will not listen now');

// Fire the connection event
eventEmitter.emit('connection');

eventListeners =
require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners +
    ' listener(s) listening to connection event');

console.log('Program ended');