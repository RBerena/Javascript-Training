/*
Author: Raymart Berena
Date: September 2, 2025
*/

// FUNCTIONS
// Functions are always hoisted to the top of the code - Doesn't work with Function Expressions
// Define a block of code that can be called upon
// function greet(){
//     console.log("Hello There");
// }

// Function Expression - variable set to a function - Most used
// const speak = function(){
//     console.log("Good Day");
// };

// greet();

// speak();

// Arguments and Parameters
// "time" and "name" are arguments
const speak = function(time = 'Day',name = 'User'){ // time and name have been given default values
    console.log(`Good ${time}, ${name}`);
};

speak('Morning','Raymart');
speak() // Since we've given default values, they will give the default value instead of undefined

// Returning Values
// const calcArea = function(radius){
//     return 3.14 * radius**2; // Allows area to be returned outside of the function block
// }

// Arrow Functions
// Shorter way of writing functions
const calcArea = (radius) => 3.14 * radius**2;

const area = calcArea(5);
console.log(`Area is: ${area} units`);

// Practice Arrow Functions - Turn commented functions into arrow functions

// const greet = function(){
//     return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0;i < products.length;i++){
//         total += products[i]+ products[i] * tax;
//     }
//     return total;
// }

const bill = (products,tax) => {
    let total = 0;
    for(let i = 0;i<products.length;i++){
    total += products[i] + products[i] * tax;
    }
    return total;
};

// METHODS
const firstName = 'Raymart';

let upperCaseName = firstName.toUpperCase(); // Methods use "Dot Notation" to be invoked
console.log(upperCaseName);

// Callbacks & Foreach
const myFunction = (callbackFunction) => {
    // do something
    let value = 50;
    callbackFunction(value);
};

// myFunction(function(value){
//     // do something
//     console.log(value);
// });

myFunction(value => {
    console.log(value);
});

let people = ['Mark Scheifele', 'Kyle Connor', 'Gabriel Vilardi', 'Josh Morrissey', 'Dylan Demelo'];

people.forEach(person => console.log(`Starting for your Winnipeg Jets, ${person}!`));

