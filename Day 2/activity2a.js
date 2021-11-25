let topping = "chicken";

switch (topping) {
    case "pineapple":
    case "mushroom":
        console.log("These are important ingredients for my pizza");
    break;
    case "chicken":
    case "tuna":
        console.log(`I don't mind having ${topping} on my pizza`);
    break;
    case "pepperoni":
    case "onion":
        console.log(`${topping} should not be on my pizza`)
}
