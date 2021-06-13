'use strict';


let x = 5;
let y = 20;
let z = 5;


/*
 -------------------------
 In our memory 10 will be stored
 10 will be stored in the memory 
 And the memory will return the address where the value 10 is stored
 the variable x will point to the place in the memory where 10 exists

 -------------------------
 */

/*
 ------------------------
    Primitive or fixed data types
    booleans, numbers, strings, char
 ------------------------
 */

console.log('============================================= pass by value');
let line1 = "Where now?"

console.log('initial line 1 value', line1);


let line2 = line1;

console.log('copying the value of line 1 to line 2 variable', line2);

line1 = 'To amman!'

console.log('line one after it has been changed', line1);
console.log('the value that line 2 is pointing to wont be affected! ', line2);


/*
  Large/ complex data types
  Objects, functions, Array
 */
console.log('============================================= pass by reference');

const arrOfNumbersOne = [1, 2, 3, 4, 5, 6, 7];
console.log('initial Array 1 value: ', arrOfNumbersOne);
const arrOfNumbersTwo = arrOfNumbersOne;
console.log('initial Array 2 value, which is a copy of array 1: ', arrOfNumbersTwo);

arrOfNumbersTwo.push(8);

console.log('Array 1 value after pushing 8 to array 2: ', arrOfNumbersOne);
console.log('Array 2 value after pushing 8 to it: ', arrOfNumbersTwo);
