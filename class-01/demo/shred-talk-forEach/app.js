'use strict';

// Normal for loop 

const cats = [
    'MishMish',
    'Boogie',
    'Molly',
    'Nim Nim'
];

// for (let index = 0; index < cats.length; index++) {
//     console.log(cats[index]);
// }


// ForEach Syntax

// cats.forEach((value) => {
//     console.log(value);
// });

// cats.forEach((cat) => console.log(cat))

// forEach does not have a return value.
// it does not alter or changes the array.


// filter out the Even Number
const arrayOfNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

// using only Foreach
// create a new array containing only even number 

const arrayOfEvenNumbers = [];

arrayOfNumbers.forEach((number) => {
    if (number % 2 === 0) {
        arrayOfEvenNumbers.push(number);
    }
});

console.log(arrayOfNumbers);
console.log(arrayOfEvenNumbers);