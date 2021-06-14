'use strict';

// Promises DECLARE functionality
// "Go ahead and do your work and let me know when you're done.  Meanwhile, I'm going to do other things."

// promise is a class in javascript

let longTask = (status) => new Promise((resolve, reject) => {
    let timer = Math.floor(Math.random() * 1000);
    // console.log(timer);
    setTimeout(() => {
        if (status) {
            resolve(`Good (${status} / ${timer})`);
        } else {
            reject('Bad');
        }
    }, timer);
});


// Just do this longTask one time ...
// Notice that code after this actually executes before this completes.
// longTask('First One').then(task => console.log('Task', task)).catch(console.error);
// longTask(false).then(task => console.log('Task', task)).catch(error => console.log(error));

// Running many async things individually (no guarantee of order)
// console.log('------- Individually ----------');
// longTask('i - 1').then(task => console.log('Task', task)).catch(console.error);

// longTask('i - 2').then(task => console.log('Task', task)).catch(console.error);

// longTask('i - 3').then(task => console.log('Task', task)).catch(console.error);

// longTask('i - 4').then(task => console.log('Task', task)).catch(console.error);

// Running many async things in a series -- These will always happen in order
// console.log('------- Chained ----------');
// longTask('c - 1').then(data => {
//     console.log(data);
//     return longTask('c - 2');
// }).then(data => { console.log(data); return longTask('c - 3'); })
//     .then(data => { console.log(data); return longTask('c - 4'); }).then(data => console.log('last one ' + data));


// Running Many Async Things Simultaneously ... they may not all finish in order, but the collected responses will be GIVEN to you in order
// console.log('------- Promise.all() ----------');
// let stuffToDo = [];
// for (let i = 1; i <= 10; i++) {
//     stuffToDo.push(longTask(`pa - ${i}`));
// }
// Promise.all(stuffToDo)
//     .then(things => console.log('Promise.all() Response Array', things))
//     .catch(console.error);




// longTask('order from talabt').then(data => {
//     console.log('order placed');
//     longTask('eat the food').then(data => console.log('got the pizza and now I am eating '))
// }).catch(error => console.log(' order was lost '));

