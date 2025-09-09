/*
Author: Raymart Berena
Date: September 4, 2025
*/

// DOM - Document Object Model
// const para = document.querySelector("p");
// const error = document.querySelector(".error"); // p tag with a class of error
const divError = document.querySelector("div.error"); // div tag with class of error
// console.log(para);
console.log(divError);

// const errors = document.querySelectorAll(".error")

// console.log(errors);

// Get an element by ID
const title = document.getElementById("page-title");

console.log(title);

// Get element by class name
const errors = document.getElementsByClassName("error");

console.log(errors);

// Get elements by tag name
const paras = document.getElementsByTagName("p");
console.log(paras[2]);

// 
const p = document.querySelector('p');

// console.log(p.innerHTML);
// p.innerHTML = "Text overrided";

const ps = document.querySelectorAll('p');

ps.forEach((p => {
    console.log(p.innerText);
    p.innerText += ' New Text';
}));

const content = document.querySelector(".content")

// console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new H2</h2>';

const pokemon = ['Pikachu','Charizard','Mew','Mewtwo'];

pokemon.forEach(poke => {
    content.innerHTML += `<p> ${poke}</p>`;
})

// Get and update attributes
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'rrc.hub.ca');

// Choose attribute of href
console.log(link.getAttribute('href'));

// Change link text to RRC Hub Website
link.innerText = "RRC Hub Website";
// message is the selector for the error class
// const message = document.querySelector('.error');

// console.log(message.getAttribute("class"));

// Change class of 'error' to 'success'
// message.setAttribute('class', 'success');

// console.log(message.getAttribute("class"));

// Change CSS of attribute
// message.setAttribute('style', 'color: red;');

const h1 = document.querySelector('h1');
// Set attribute completely overrides styles  that are currently applied
//h1.setAttribute('style', 'margin: 50px');

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px"; // This doesn't override the previous attributes
title.style.color = "crimson";
title.style.fontSize = "100px";
title.style.margin = ''; // This removes the property

const message = document.querySelector('p');
console.log(message.classList);

message.classList.add('error');

const error = document.querySelectorAll("p");
error.forEach( err => {
    if( err.textContent.includes("error")){
        err.classList.add('error');
    }
    else if(err.textContent.includes("success")){
        err.classList.add('success');
    }
})