'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ', ' + name);
}

greet('Hi', 'Bill');
greet('Hi');
greet();

// function sum() {
//     var sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     console.log(sum);
// }

// function sum(...values) {
//     console.log(values instanceof Array);

//     let sum = 0;

//     values.forEach(function (value) {
//         sum += value;
//     });

//     console.log(sum);
// }

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var sum = values.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
    });

    console.log(sum);
}

sum(5, 6, 3, 1);