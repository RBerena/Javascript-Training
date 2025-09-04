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