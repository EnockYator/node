function printHello(){
    console.log("Hello There!");
}

// Calling the function in intervals of 2 seconds
var t = setInterval(printHello, 2000);

// Clear the timer interval
clearInterval(t);