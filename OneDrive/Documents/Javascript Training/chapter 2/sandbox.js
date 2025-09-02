// Camel-case is used for variables
let myAge = 25;
let year = 2025;

// log things to the console
console.log(myAge, year);

/*
This 
is 
a 
multi-line 
comment
*/ 
// let age = 30;
// console.log(age);

const points = 100;
console.log(points);

// var score = 75;
// console.log(score);

/*Section 2 of video */

// STRINGS
console.log('hello, world')

let email = 'rberena@rrc.ca'
console.log(email);
// string concatenation
let firstName = "Raymart";
let lastName = "Berena";

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0],fullName[1],fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
//console.log(result);

let index = email.indexOf("@");
console.log(index);

// COMMON STRING METHODS
let indexResult = email.lastIndexOf('n');
console.log(indexResult);

// SLICE
// 0 = starting point 10 = end point
// let result = email.slice(0,10);
//console.log(result);

// SUBTSTRING
// 4 =starting point 10 = finds 10 characters
// let result = email.substring(4,10);
//console.log(result);

// REPLACE
// only replaces the first of that character
// let result = email.replace('r', 't')
//console.log(result);

// NUMBERS
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// Math Operators +, -, *, /, **, %
//console.log(10/2);
//let result = pi * radius**2;
//let result = radius % 3;

// using BEDMAS - Order of Operations
// let result = 5 * (10-3)**2;
/*By order of operations you would go:
10 - 3 = 7
7**2 = 49
49 * 5 = 245
result = 245
 */

// let likes = 10;

// likes++; //likes (likes is = 10) = likes + 1;
// likes += 10; // likes = likes(current value) + 10
// console.log(likes); // output should be 1

// NaN = Not a Number - occurs when calculation doesn't result in a number

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// TEMPLATE STRINGS
const title = 'Best reads of 2025';
const author = "Raymart";
const likes = 30;

// Concatenation
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';


// Template String
//let result = `The blog called ${title} by ${author} has ${likes} likes`

//Both methods above return the same output, but template strings are much easier to read


// Creating html templates
let html = `
            <h2>${title}</h2>
            <p> By ${author}</p>
            <span>This blog has ${likes} likes</span>
            `;
console.log(html);

// ARRAYS
let ninjas = ['Naruto', 'Sasuke', 'Sakura'];
console.log(ninjas);
// console.log(ninjas[1]); // Sasuke

ninjas[1] = 'Sai';
console.log(ninjas);

// let ages = [20, 25, 30, 25];
// console.log(ages[2]); // 30

// let random = ['Raymart', 21, 'Berena', 23];
// console.log(random);
// console.log(ninjas.length);

// Array Methods

//let result = ninjas.join(' - ');

// let result = ninjas.indexOf('Sakura');

// let result = ninjas.concat(['Jiraiya', 'Tsunade', 'Orochimaru']);

// let result = ninjas.push('Kakashi'); // Destructive method - adds to original array
// result = ninjas.pop(); Will show the value that was 'popped'(removed)

// console.log(result);

//NULL and UNDEFINED
// let age = null; // explicitly declared
// null can be used as a placeholder

// console.log(age, age + 3, `the age is ${age}`); // age is undefined

// BOOLEANS
console.log(true, false, "true", "false"); // booleans will appear in a different color

// Methods that return booleans
// email = rberena@rrc.ca declared earlier

let resultTrue = email.includes("@"); // true
let resultFalse = ninjas.includes("Kakashi"); // false
console.log(resultTrue);
console.log(resultFalse);

// Comparison Operators
let age = 28;

console.log(age == 28);// true
console.log(age == 30);// false
console.log(age != 30);// true // ! - is the NOT operator
console.log(age > 20);// true
console.log(age < 28);// false
console.log(age <= 28);// true
console.log(age >= 28);// true

let name = 'shaun';
console.log(name == 'shaun'); // true
console.log(name == 'Shaun');// false - case sensitive
console.log(name > 'crystal');// comparing position of s in alphabet to c in alpphabet
console.log(name > 'Shaun');
console.log(name > 'Crystal');

// Loose Comparison
// console.log(age == '28');
// console.log(age == '28');
console.log(age != 28);
console.log(age != '28');

// Strict Comparison
console.log(age === 28); // Will check VALUE and DATATYPE
console.log(age === '28');// False becuase the datatype doesn't match
console.log(age !== 28);// False
console.log(age !== '28');// True


// TYPE CONVERSION
// let score = '100';

// score = Number(score);// Convert '100' into 100
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// console.log(result); // NaN

let result = String(50);
console.log(result, typeof result);