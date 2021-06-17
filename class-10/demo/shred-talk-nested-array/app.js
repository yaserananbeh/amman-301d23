'use strict'

// two dimensional array
const array = [[2, 4, 6, 8], [1, 3, 7, 9], [4, 3, 8, 6]];

for (let firstArrayIndex = 0; firstArrayIndex < array.length; firstArrayIndex++) {
    console.log('parent array values: ', array[firstArrayIndex]);
    for (let secondArrIndex = 0; secondArrIndex < array[firstArrayIndex].length; secondArrIndex++) {
        console.log('Nested array values: ', array[firstArrayIndex][secondArrIndex]);
    }

}