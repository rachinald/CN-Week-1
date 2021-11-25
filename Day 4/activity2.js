const pet = {
    name: "Poppet", 
    typeOfPet: "cat",
    age: 8,
    colour: "black and white",

    eat (){
        return (`${this.name} is eating.`);
    },
    
    drink (){
        return (`${this.name} is drinking.`);
    }

}
console.log(pet.eat());
console.log(pet.drink());