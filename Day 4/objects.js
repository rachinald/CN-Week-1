let offer = "none";
let time = 1200;

const cafe = {
    name: "Divine Wellness",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappucino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate",
    ],

    breakfastOffer:"Free Croissant with coffee",
    lunchOffer: "Free drink with any sandwich",
    noOffer: "Sorry, no offer",

    // cant use an arrow if you are inside an object, otherwise 'this' wont work
    openCafe(){
        if(this.hasSpecialOffers){
            return "Time for a special offer!";
        }
    },
    closeCafe(){
        return "We are closed, come back tomorrow!";
    }
};

console.log(cafe.closeCafe());

if (time < 1100){
    offer = cafe.breakfastOffer;
    console.log(offer);
} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(offer);
}


const person = {
    name: "Rachael",
    age: 32,
    starsign: "pisces",

}
console.log(person.name);


let day = "Saturday"

const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am",
};

if (day == "Saturday" || day == "Sunday") {
   console.log(alarm.weekendAlarm);
} else {
    console.log(alarm.weekdayAlarm);
}

