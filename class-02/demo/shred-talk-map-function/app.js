'use strict';

const arrayOfNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

// and we want to filter out using the forEach the Odd numbers
// create a new array containing the odd values from the array of numbers
// using the forEach

/*
----------------------
 using forEach
 - the forEach does not have a return value
 - does not alter the original array
----------------------
*/

// const oddNumArr = [];

// arrayOfNumbers.forEach((value) => {
//     if (value % 2 !== 0) {
//         oddNumArr.push(value)
//     }
// });

// console.log(oddNumArr);

/*
----------------------
Using map function
- the map function has a return value from the callback function
- it does not alter the array
- the map will always return a New array of the same length as the original array
----------------------
*/


// our call back function is an anonymous arrow function
// const oddNumArr = arrayOfNumbers.map((number) => {
//     if (number % 2 !== 0) {
//         return number
//     }
// });


// using a call back function 
// we used a normal arrow function with a name
// and we passed that function name to our map callback paramter 

// arrow function 
const oddNumberCheck = (number) => {
    if (number % 2 !== 0) {
        return number
    }
}

// normal function 
// function oddNumberCheck(number) {
//     if (number % 2 !== 0) {
//         return number
//     }
// }

const oddNumArr = arrayOfNumbers.map(oddNumberCheck)


console.log(oddNumArr);


/*
--------------------
Take an array of numbers and add +2 to each value in that array
--------------------
*/

// const valueAddedTwo = arrayOfNumbers.map(number => number + 2)

// console.log(valueAddedTwo);