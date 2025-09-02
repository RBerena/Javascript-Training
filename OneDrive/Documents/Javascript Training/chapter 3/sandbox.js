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
