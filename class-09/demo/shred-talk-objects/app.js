'use strict';

const person =
{
    name: "John",
    role: "Dad",
    interests: ["Coaching", "Teaching"]
};

// we are going to loop through this person

// for (const key in person) {
//     // console.log(typeof key);
//     // console.log(person.key); // it will assume that there is a key that has the name key in the object
//     console.log(person[key]); // to get the value
// }


// console.log(Object.keys(person));

// Object.keys(person).forEach(key => {
//     console.log(key);
//     console.log(person[key]);
// });

// console.log(Object.values(person));

// Object.values(person).forEach(value => console.log(value));

console.log(Object.entries(person));