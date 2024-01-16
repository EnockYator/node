// Import the event module
var events = require('events');

// Create the eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an eventHandler/ listener
var connectHandler = function connected() {
    console.log('Connection successful');

    // Fire file_received event
    eventEmitter.emit('file_received');
};

// Bind connection event with connectHandler
eventEmitter.on('connection', connectHandler);

// Bind file_received event with anonymous function
eventEmitter.on('file_received', function () {
    console.log('File received successfully');
});

// Fire connection event
eventEmitter.emit('connection');

console.log('Program ended');