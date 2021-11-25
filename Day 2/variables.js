// Let example that will work
let age = 27;
console.log(age);
age = 30;
console.log(age);


// Const Example that wont work
const age = 27;
console.log(age);
age = 30;
console.log(age);


let i = 10;
i=i+2;
console.log(i)

// use this instead
i+=2;
console.log(i)

// 
let favouriteDrink = "coffee";
console.log(favouriteDrink);
console.log("My favourite drink is" + favouriteDrink);

// this is a lot easier - using Template Literals: back ticks, dollar sign and curly braces
let firstName = "Rach";
let age = "32";
let faveDrink = "Coffee";

console.log(`Hi my name is ${firstName}. I am ${age} and my fave drink is ${faveDrink}`);

// to update it you can write it like this:
age = 33;
faveDrink = 'tea';
