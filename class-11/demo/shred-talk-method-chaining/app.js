// we have an array of numbers
// we are going to filter the even numbers
// then we are going to sum the total of even numbers

const arr = [2,3,4,5,6,10,12,11,13,19,16]

// const evenArr = arr.filter( value => {
//   return (value % 2 === 0)
// })


// console.log(evenArr)

// const sumTotal = evenArr.reduce((acc, value) => {
//   return acc+=value
// });

// console.log(sumTotal)


// we are going to chain both method and use a single value to contain the total sum of the even numebr in our Array

// we chain the filter method with the reduce method

const totalEvenSum = arr.filter(num => num % 2 === 0).reduce( (acc , value ) => acc+=value);

console.log(totalEvenSum)