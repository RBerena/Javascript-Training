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
let age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

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

let likes = 10;

likes++; //likes (likes is = 10) = likes + 1;
likes += 10; // likes = likes(current value) + 10
console.log(likes); // output should be 1

// NaN = Not a Number - occurs when calculation doesn't result in a number

let result = 'the blog has ' + likes + ' likes';
console.log(result);

