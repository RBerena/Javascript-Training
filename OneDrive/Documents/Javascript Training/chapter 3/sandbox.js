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