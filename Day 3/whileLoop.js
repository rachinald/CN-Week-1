let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Club';

while (currentCard != 'Spade'){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()* 4)]
}

console.log(currentCard)

// will loop until it gets to spade