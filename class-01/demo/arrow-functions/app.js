'use strict';

// arrow function

// An ES6 Feature

// different way of writing functions
// shorter syntax 
// using the this key word, behaves differently from normal function
// doesn't work with constructor function

/*
-----------------------------
anonymous functions
-----------------------------
*/
// anonymous functions are function that have no name
// document.getElementById('magic-button').addEventListener('click', function (event) {
//     alert('Magic Button clicked \u{1F389}')
// });

// anonymous arrow function
// document.getElementById('magic-button').addEventListener('click', (event) => {
//     alert("arrow function Magic \u{1F389} \u{1F389}");
//     console.log();
// })

// even shorter
document.getElementById('magic-button').addEventListener('click', (event) => alert("arrow function Magic \u{1F389} \u{1F389}"))


/*
-----------------------------
normal functions
-----------------------------
*/


// Normal way
function sum(a, b) {
    return Number(a) + Number(b);
}

// console.log(sum(2, 2));

// Using Arrow function with a body
// you need a return statement
// const arrowSum = (a, b) => {
//     return Number(a) + Number(b);
// }

// Using Arrow function with a one line (no return needed) even shorter way
const arrowSum = (a, b) => Number(a) + Number(b);

console.log(arrowSum(4, 2));