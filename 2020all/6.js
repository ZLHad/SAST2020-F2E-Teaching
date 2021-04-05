function sayHi() {
    if (arguments[0] == "bye") {
        console.log("GoodBye!")
        return;
    }
    console.log(arguments[0]);
}
sayHi("hi");
sayHi("bye");

function overLoadAdd() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(overLoadAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));