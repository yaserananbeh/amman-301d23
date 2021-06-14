'use strict';
/*
-----------------------------------
Split
- the split function is a string method 
- it is used to split the string into an array based of a separator (criteria)
-----------------------------------
*/
const helloWorld = 'Hello World';
// without any parameters
// const arrOfWords = helloWorld.split();
// i want to split the word whenever it find a space
// const arrOfWords = helloWorld.split('o');
// const arrOfWords = helloWorld.split('');
const arrOfWords = helloWorld.split(' ');
console.log('string: ', helloWorld);
console.log('Our Splitted array: ', arrOfWords);

/*
-----------------------------------
Join
- the opposite of the split function
- an array method
- it is used to join an array into a string based of a criteria (condition/ character)
-----------------------------------
*/

// const makeItAStringAgain = arrOfWords.join();
// const makeItAStringAgain = arrOfWords.join("-");
const makeItAStringAgain = arrOfWords.join(" ");
console.log('Our Joined string: ', makeItAStringAgain);
console.log('original array: ', arrOfWords);


/*
-----------------------------------
Slice
- An array method
- is to find elements/ values within an array
-----------------------------------
*/

const peperoniPizza = [1, 2, 3, 4, 5, 6, 7, 8];
const abduallahAlAbedSlice = peperoniPizza.slice(5, 6);
const reemsSlices = peperoniPizza.slice(1, 4);
const crazySlice = peperoniPizza.slice(7, 6); // []
const reverseSlice = peperoniPizza.slice(peperoniPizza.length - 1); // start at 6 and end at 7
const greedySlicing = peperoniPizza.slice(2);
// console.log('abduallahs slice', abduallahAlAbedSlice);
// console.log('Reems slice', reemsSlices);
// console.log('crazySlice', crazySlice);
// console.log('reverseSlice', reverseSlice);
// console.log('greedySlicing', greedySlicing);
// console.log(peperoniPizza);

/*
-----------------------------------
Splice
- An array method that is used to modify the array
- is used to remove an item in the array/ 
- is used to add an item in the array instead of another element
- push an element into the array at a certain point
-----------------------------------
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

// to remove an item using the splice function
// arr.splice(1, 1);
// to replace an item using the splice 
// arr.splice(1, 1, 'B');
// to push an item into the array without deleting
arr.splice(1, 0, 'B');
console.log(arr);