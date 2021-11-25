// const pressGrindBeans = () => {
//     console.log ("Grinding for 20 seconds");
// }


// // the below code runs the entire function and can be repeated whenever you want
// pressGrindBeans ();


let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log ("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans ();
pressGrindBeans ();
pressGrindBeans ();


const addUp = (num1, num2) => {
    return num1 + num2;
}

// this data is user inputted from an app/website
addUp (7,3);


const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else {
        return (n*factorial(n-1));
    }
}
console.log(factorial(33));


let orderCount = 0;
const takeOrder = (topping, base) => {
    console.log(`Pizza with ${topping} and a ${base} base.`);
    orderCount++;
}
takeOrder ("pineapple", "cauliflower");
takeOrder ("chicken", "gluten free");
console.log(orderCount);



