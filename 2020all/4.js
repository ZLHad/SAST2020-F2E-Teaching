console.log(0 == "0");
console.log(0 === "0");
console.log(0 == []);
console.log("0" == []);
var x;
console.log(x);
var y = null;
console.log(y);
console.log(x == y);
console.log(x === y);
console.log("\u03b1");
console.log("\u03b2");
console.log("\u03b3");
console.log("\u03b4");
console.log("\u03b5");

var x = 12, y = 20;
function gcd(x, y) {
    if (y == 0) {
        return x;
    } else {
        return gcd(y, x % y);
    }
}
function gcd(x, y) { return y ? gcds(y, x % y) : x; }
console.log(gcd(x, y));
