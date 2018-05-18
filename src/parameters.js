function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting}, ${name}`);
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

function sum(...values) {
    let sum = values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    });

    console.log(sum);
}

sum(5, 6, 3, 1);