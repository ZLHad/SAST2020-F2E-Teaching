console.log(1);
setTimeout(function () {
    console.log(2);
})
var promise = new Promise(
    function (resolve, reject) {
        console.log(3);
        resolve();
    }
)
promise.then(function () {
    console.log(4);
})
console.log(5);


// console.log(1);
// setInterval(function () {
//     console.log(100);
// }, 1000);

// var promise = new Promise(
//     function (resolve, reject) {
//         console.log(3);
//         resolve();
//         var promise2 = new Promise(
//             function (resolve, reject) {
//                 console.log(10);
//                 resolve();
//                 console.log(11);
//             }
//         );
//         promise2.then(function () {
//             console.log(6);
//         });
//     }
// )
// promise.then(function () {
//     console.log(4);
// });
// setTimeout(function () {
//     console.log(2);
// }, 500);

// promise.then(function () {
//     console.log(57);
// });
// console.log(5);