console.log("Program started");

var counter = 10;

console.log("Initial Counter: %d\n", counter);

function countDown(counter){
    for(counter = 10; counter >= 0; counter--){
        console.log("Counter: %d", counter);
    };
}

countDown();

console.time("Getting data");

console.timeEnd("Getting data");

console.info("Program ended");