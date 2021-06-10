'use strict';

// Having an array of number, i want to calculate the sum of all the numbers in the array. And I want to do  it without using another variable 

const arrOfNUmbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let sum = 0;
// arrOfNUmbers.forEach((num) => {
//     sum += num;
// });

// console.log(sum);

const sum = arrOfNUmbers.reduce((accumulator, currentValue) => {
    // console.log('accumulator', accumulator);
    // console.log('current value', currentValue);
    return accumulator += currentValue;
}, 0);

// console.log('sum', sum);


// mutate the key value pairs to become instead of name role to the persons name and their role as their value

const people = [
    { name: 'Fred', role: 'Developer' },
    { name: 'Suzy', role: 'Developer' },
    { name: 'Gina', role: 'Manager' },
    { name: 'Jim', role: 'Support' }
];


const newPeopleArr = people.reduce((acc, currentObj) => {
    console.log('accumulator', acc);
    console.log('currentObj', currentObj);
    acc[currentObj.name] = currentObj.role;
    return acc;
}, {});

console.log(newPeopleArr);