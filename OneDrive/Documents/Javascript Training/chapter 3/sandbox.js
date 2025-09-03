/*
Author: Raymart Berena
Date: September 2, 2025
*/

// For Loops

// for(let i = 0; i < 5; i++){ // Start at 0; iterate until 5 or greater; add 1 every iteration
//     console.log('in loop ' + i);
// }
// console.log("Loop finished.")

const names = ['Raymart', 'Kat', 'Hiko'];

// This loop will iterate over each name in the array above
for(let i = 0; i < 3; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While Loops
let i = 0;

// while(i < 3){
//     console.log('iteration #',i);
//     i++;
// }

while(i < names.length){
    console.log(names[i]);
    i++;
}

// Do-While Loops
i = 5;

do{
    console.log('value of i is:',i);
    i++
}while(i < 5);

// CONDITIONAL STATEMENTS
// If Statements
// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi'];

// if(ninjas.length > 3){
//     console.log("That's a lot of ninjas");
// }

const password = "p@ss124";

// if(password.length >= 12){
//     console.log("That password is very strong.")
// }else if(password.length >= 6){
//     console.log("That password is long enough.")
// }else{
//     console.log('That password is not long enough.')
// }

// LOGICAL OPERATORS
// OR - || One of the conditions == true, AND - && Both conditions must == true
if(password.length >= 12 && password.includes('@')){
    console.log("That password is very strong.")
}else if(password.length >= 6 || password.includes('@') && password.length > 5){
    console.log("That password is long enough.")
}else{
    console.log('That password is not long enough.')
}

// Logical Not "!"
let user = false;

if(!user){
    console.log("You must be logged in to continue!")
}

console.log(!true);
console.log(!false);

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue; // Skips 0 output
    }

    console.log('your score:', scores[i]);

    if(scores[i] === 100){
        console.log("Top Score!");
        break; // Stops the loop
    }
}

// Switch Statements
const grade = 'C';

switch(grade){
    case 'A':
        console.log("You got an A!");
        break;
    case 'B':
        console.log("You got a B!");
        break;
    case 'C':
        console.log("You got a C!");
        break;
    case 'D':
        console.log("You got a D!");
        break;
    case 'F':
        console.log("You got an F.");
        break;
    default:
        console.log("Not a valid grade.");
}

// Variables & Variable Scope
let age = 30; // global scope - accessible anywhere

if(true){
    let age = 40; // Block/local scope - accessible only within this block
    let name  = "Ray"
    console.log('inside 1st code block: ', age, name);

    if(true){
        let age = 50;
        console.log('inside 1st code block: ', age);
    }
}

console.log('outside code block: ', age, name);