// Assignment 1
// Create a variable for each of the following: 
// your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations 
// (let, const, or var). Try logging it using console.log

let color = 'blue';
const height = 177;
var userName = "abc xyz";

// console.log(color);
// console.log(height);
// console.log(userName);

// -------------------------------------------------------------------------------------------------------//

// Assignment 2
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

// sum(10, 15);
// sum('abc', 'pqr'); // concat strings

// -------------------------------------------------------------------------------------------------------//

// Assignment 3
// Write a function called canVote that returns true or false if the age of a user is > 18

function isLegal(age) {
    if (age >= 18) {
        console.log('Legal to Vote');
    }
    else {
        console.log('Illegal to Vote');
    }
}

// isLegal(15);
// isLegal(25);

// -------------------------------------------------------------------------------------------------------//

// Assignment 4
// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function isOddEven(number) {
    if (number % 2 == 0) {
        console.log('The number is even.');
    } else {
        console.log('The number is odd.');
    }
}
// isOddEven(7);
// isOddEven(10);

// -------------------------------------------------------------------------------------------------------//

// Assignment 5
// Write a function called sum that finds the sum from 1 to a number

function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`Sum of ${1} to ${n} : ${sum}`);

}
// sumOfNumbers(77)

// -------------------------------------------------------------------------------------------------------//

// Assignment 6
// Write a function that takes a user as an input and greets them with their name and age
function greet(user) {
    console.log(`Hello ${user.userName}, your age is ${user.age}.`);
}
const user = {
    userName: "ABC XYZ",
    age: 25
}
// greet(user) //passing user object

// -------------------------------------------------------------------------------------------------------//

// Assignment 7
// Write a function that takes a new object as input which has name,
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

const user1 = {
    userName: "ABC XYZ",
    gender: 'Male',
    age: 25
}

const user2 = {
    userName: "PQR LMO",
    gender: 'Female',
    age: 17
}

const user3 = {
    userName: "QWE ASD",
    gender: 'Other',
    age: 20
}

function greetUser(user) {
    let title;
    if (user.gender == 'Male')
        title = 'Mr.'
    else if (user.gender == 'Female')
        title = 'Ms.'
    else
        title = 'Mx.'
    console.log(`Hello ${title}${user.userName}, your age is ${user.age} and your ${user.age >= 18 ? 'Legal' : 'Illegal'} to vote.`);
}
// greetUser(user1)
// greetUser(user2)
// greetUser(user3)

// -------------------------------------------------------------------------------------------------------//

// Assignment 8
// Write a function that takes an array of numbers as input, 
// and returns a new array with only even values. Read about filter in JS

function getEvenValues(arr) {
    const evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            evenArr.push(arr[i]);
    }
    return evenArr;

    // using filter
    // return arr.filter(function isEven(num) {
    //     return num % 2 === 0;
    // });
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenValuesArr = getEvenValues(numbers);
//console.log(evenValuesArr);

// -------------------------------------------------------------------------------------------------------//

// Assignment 9
// Write a function that takes an array of users as inputs and
// returns only the users who are more than 18 years old

const users = [{
    name: "Harkirat",
    age: 21,
    gender: 'male'
}, {
    name: "raman",
    age: 22,
    gender: 'male'
}, {
    name: "asd",
    age: 17,
    gender: 'female'
},
{
    name: "lmn",
    age: 19,
    gender: 'female'
}, {
    name: "pqr",
    age: 15,
    gender: 'other'
}]

function getUsers(usrs) {
    const newUsers = [];
    for (let i = 0; i < usrs.length; i++) {
        if (usrs[i].age >= 18)
            newUsers.push(usrs[i]);
    }
    return newUsers;
}
const newUsers = getUsers(users);
//console.log(newUSers);

// -------------------------------------------------------------------------------------------------------//

// Assignment 10
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function getMaleUsers(usrs) {
    const newUsers = [];
    for (let i = 0; i < usrs.length; i++) {
        if (usrs[i].age >= 18 && usrs[i].gender == 'male')
            newUsers.push(usrs[i]);
    }
    return newUsers;
}

const newMaleUSers = getMaleUsers(users);
// console.log(newMaleUSers);

// -------------------------------------------------------------------------------------------------------//