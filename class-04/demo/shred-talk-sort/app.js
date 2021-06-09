'use strict';

// Array method Sort

/*
-----------------
- Alters/ Changes the original array
- The default behavior of the sort function can be overridden 
- Passing in the sort Function paramter a call back function (anonymous function)
-----------------
*/
const arrOfNumbers = [
    3, 2, 9, 4, 1, 5, 8, 7, 6
];

const arrOfNumbersButWait = [
    3, 2, 9, 10, 4, 1, 5, 8, 7, 6
];

// console.log('before', arrOfNumbers);

// arrOfNumbers.sort();

// console.log('after', arrOfNumbers);

// console.log('before', arrOfNumbersButWait);

// the default behavior of sorting
// arrOfNumbersButWait.sort()

// we will override that behavior using a callback function

// Smallest to Largest
// arrOfNumbersButWait.sort((a, b) => {
//     // console.log(a, b);
//     if (a < b) {
//         return -1; // shift the value (a) by a lower index
//     }

//     if (a > b) {
//         return 1; // shift the value (a) to a higher index
//     }

//     return 0;

// })

// shorthand version
// arrOfNumbersButWait.sort((a, b) => a - b);

// Largest To Smallest 
// arrOfNumbersButWait.sort((a, b) => {
//     // console.log(a, b);
//     if (a > b) {
//         return -1;
//     }

//     if (a < b) {
//         return 1;
//     }

//     return 0;

// })
// shorthand version
// arrOfNumbersButWait.sort((a, b) => b - a);

// console.log('after', arrOfNumbersButWait);


// We want to sort this array of object in two
// first by the alphabetical order name of the instructional staff
// is by their position

const instructionalTeam = [
    { name: 'Tamim', position: 'Instructor' },
    { name: 'Anolla', position: 'TA' },
    { name: 'Yahya Abu Khalil', position: 'TA' },
    { name: 'Dana', position: 'TA' },
    { name: 'Ahmad', position: 'Instructor' },
    { name: 'Raghad', position: 'TA' },
    { name: 'Sally', position: 'TA' }
]

// sort by Alphabetical name order

// instructionalTeam.sort((a, b) => {
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//         return -1;
//     }
// })

// console.log(instructionalTeam);

// sort by position
// sort first the TAs before the instructor 
instructionalTeam.sort((a, b) => {
    if (a.position.toLocaleLowerCase() === 'ta') {
        return -1;
    }
});

console.log(instructionalTeam);