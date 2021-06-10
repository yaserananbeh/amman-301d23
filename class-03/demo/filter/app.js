'use strict';


const arrayOfNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

/*
----------------------
Using map function
- the map function has a return value from the callback function
- it does not alter the array
- the map will always return a New array of the same length as the original array
----------------------
*/

// const oddNumArr = arrayOfNumbers.map((number) => {
//     if (number % 2 !== 0) {
//         return number
//     }
// });

// console.log(oddNumArr);



/*
----------------------
Using filter function
- the filter function has a return value from the callback function
- it will return an array of filtered data based on your condition (criteria)
- it does not alter the array
- the filter will always return a New array of filtered data based on your criteria
----------------------
*/

const oddNumArr = arrayOfNumbers.filter((number) => {
    return (number % 2 !== 0)
});

console.log(oddNumArr);


// IN our array of object
// I want to filter out the people who are only adults
const people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
];

const roleCondition = 'kid';
const adultsArrOfObj = people.filter((obj) => obj.role.toLowerCase() !== 'kid')

console.log(adultsArrOfObj);