function printHello() {
    console.log("Hello There!");
}

//call function after 2 seconds
var t = setTimeout(printHello, 2000);

// clear the timer
clearTimeout(t);

console.log("Timer cleared");

