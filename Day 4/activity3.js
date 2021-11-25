const coffeeShop = {
    branch: "Whalley Range",

    // you can't store different data types within an array! boo!!!
    drinks: [
       "tea",
       "coffee",
       "water",
       "lucozade",
    ],

    drinkPrices: [
        2,
        2,
        1,
        1,
    ],
    
    food: [
        "Cake",
        "Chips",
        "Toast",
        "Ice cream",
    ],

    foodPrices: [
        4,
        3,
        2,
        3,
    ],

drinksOrdered (){
            return (this.drinkPrices[0] + this.drinkPrices[1]);
            
        },

        // PUT A COMMA IN BETWEEN EVERYTHING IN AN OBJECT!!!
        
 foodOrdered (){
        return (this.foodPrices[0] + this.foodPrices[1]);
        
    },

    totalOrder (){
        return (this.foodOrdered() + this.drinksOrdered());
    }
}
    console.log("You have ordered",coffeeShop.drinks[0], "and", coffeeShop.drinks[1])
    console.log("your drinks total is £",coffeeShop.drinksOrdered());
    console.log("You have ordered",coffeeShop.food[0], "and", coffeeShop.food[1])
    console.log("Your food total is £",coffeeShop.foodOrdered());
    console.log("Your total bill is £",coffeeShop.totalOrder());