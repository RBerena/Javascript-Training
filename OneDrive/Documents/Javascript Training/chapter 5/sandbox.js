/*
Author: Raymart Berena
Date: September 4, 2025
*/

// OBJECTS

// Object Literals

// const teams = [
//     { team: 'Winnipeg Jets', stanleyCups: 0},
//     { team: 'Boston Celtics', banners: 18}
// ];

// console.log(teams)

let user = {
    name: 'Raymart',
    age: 28,
    email: 'rberena@academic.rrc.ca',
    location: 'Winnipeg',
    teams: [{ team: 'Winnipeg Jets', championships: 0},
            { team: 'Boston Celtics', championships: 18}],
    login(){
        console.log('The user logged in.');
    },
    logout(){
        console.log("The user logged out.")
    },
    logTeams(){
        // console.log(this.teams);
        console.log("This user likes the following teams:");
        this.teams.forEach(teams => {
            console.log(teams.team, teams.championships);
        })
    }
};

console.log(user.email);

user.email = "rberena@rrc.ca"; // Change property 

console.log(user.email);

// Using square brackets accomplishes the same task
user[0] = "Raymart Berena"; // Can also use "user['name']""

console.log(user[0]);

console.log(typeof(user));

// Adding methods to objects
user.login();

user.logout();

user.logTeams();

// Math object
console.log(Math.PI)

const area = -7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.abs(area));
console.log(Math.trunc(area));

// Generate random numbers
const random = Math.round(Math.random()*100);
console.log(random);

// Primitive and Reference Types
// Primitives are stored in a stack - slightly quicker
// Reference types are stored on heap - slightly slower

// Primitive Values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`);

// Reference Values
scoreOne = 100; // This doesn't affect the scoreOne declared above

console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`);

const userOne = { name: 'Raymart', age: 28};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);