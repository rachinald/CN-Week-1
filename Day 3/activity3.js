let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever is new"
];

console.log(coffeeOrder);

// let means you can change the element and [1] is the second element

coffeeOrder[1] = "Ann - Vanilla Latte";
console.log(coffeeOrder);

// pop removes last item on list
coffeeOrder.pop(); 
console.log(coffeeOrder)

// pop has removed the last item again
coffeeOrder.pop();
console.log(coffeeOrder)

// push adds elements to the list
favouriteSongs.push("Iron and Wine - House by the Sea", "Patti Smith - Gloria");