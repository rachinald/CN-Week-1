let drinks = [
    "pepsi",
    "water",
    "coffee"
]

// dont do this - use a loop
console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);

// i stands for index, its industry standard to use i in a loop
// i++ is increment, so the loop keeps running because 0 now equals 1, favedrinks is the condition 4 is not less than the condition (length) of the array
for(let i = 0; i < drinks.length; i++){
    console.log(drinks[i]);
}

// use if you need to print the entire list but you dont know how many elements you have in your list/array
// loops are cool because they are very fast

//  use while loops for true/false statements