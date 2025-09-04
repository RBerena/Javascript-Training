/*
Author: Raymart Berena
Date: September 4, 2025
*/

// OBJECTS

// Object Literals
let user = {
    name: 'Raymart',
    age: 28,
    email: 'rberena@academic.rrc.ca',
    location: 'Winnipeg',
    teams: ['Winnipeg Jets', 'Boston Celtics']
};

console.log(user.email);

user.email = "rberena@rrc.ca"; // Change property 

console.log(user.email);

// Using square brackets accomplishes the same task
user[0] = "Raymart Berena"; // Can also use "user['name']""

console.log(user[0]);

console.log(typeof(user));