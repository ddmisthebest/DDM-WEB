//For
// for(let i = 0; i <= 10; i++) {
//     console.log('For Loop Number: ${i}');
// }

// //while 
// let i = 0;
// while(i<10) {
//     console.log('while Loop Number: ${i}');
//     i++
// }

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// // console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// const { firstName, lastName } = person;

// console.log(firstName);

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
 
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For 
for(let i = 0; i < todos.length; i++) {
    console.log('For Loop Number: ${i}');
}