// const EventEmitter = require('events');
// let emitter = new EventEmitter();
// emitter.on('myEvent', () => {
//     console.log(1);
// });
// emitter.on('myEvent', () => {
//     console.log(2);
// });
// emitter.emit('myEvent');

// function Test(name, age) {
//     this.name = name;
//     this.age = age;
// };
// Test.prototype = {
//     name: 'Tom',
//     hasOwnProperty: function () {
//         return false;
//     }
// };
// var instance = new Test('jerry', 18);
// // console.log(instance.hasOwnProperty('age'));
// console.log(instance.name === 'Tom');

// const obj = {
//     base: 42,
//     add(...nums) {
//         return nums.reduce((s, i) => i + s, this.base || 0)
//     }
// };
// const f1 = obj.add.bind({ base: 3 }, [0]);
// const f2 = obj.add.bind({}, 1);
// const f3 = obj.add.bind({ base: 2 }, [1]);
// console.log(f1(2), f2(2), f3(2));


function debounce(fn, x) {
    var timer = null;
    //  清除上一次延时器
    return function () {
        clearTimeout(timer);
        //  重新设置一个新的延时器
        timer = setTimeout(() => {
            fn.call(this);
        }, x);

    }

};


// 浅拷贝就只是复制对象的引用。
// 只有深拷贝才是真正地对对象的拷贝。

// 对象的复制默认是浅拷贝，只是将地址进行了复制，示例如下：
var obj1 = { name: 'alibaba' };
var obj2 = obj1;
obj2.name = "Tecent";
console.log(obj1.name);
console.log(obj2.name);

// 深拷贝是对目标的对象完全进行拷贝，不仅仅是引用，而是值也一起复制。
// 深拷贝的对象并不会相互影响

// 方法一：递归实现每一层都重新创建对象并且赋值

//对象
var obj1 = {
    name: "Alibaba",
    show: function () {
        console.log(this.name);
    }
};

//这种深拷贝函数不会丢失
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
var obj3 = deepClone(obj1);
//输出Alibaba
obj3.show();


// 方法二：利用 JSON 对象中的 parse 和 stringify
// 如果对象中含有一个函数时（很常见），就不能用这个方法进行深拷贝
var obj1 = {
    name: "Alibaba",
    show: function () {
        console.log(this.name);
    }
};
var obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "Tecent";

console.log(obj1.name);
console.log(obj2.name);

obj1.show();
obj2.show();  //函数被丢失
