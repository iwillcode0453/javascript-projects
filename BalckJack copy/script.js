let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// if (sum <= 20) {
//     message = "Do you want to draw a new card?"
// } else if ( sum === 21) {
//     message = "Wohoo! You've got Blackjack!"
//     hasBlackJack = true
// } else {
//     message = "You're out of the game!"
//     isAlive = false
// }

// console.log(message)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// This function is to sum the cards and check if the playesr has a blackjack 

function sumCards() {
    if (sum <= 20) {
			message = "Do you want to draw a new card?";
		} else if (sum === 21) {
			message = "Wohoo! You've got Blackjack!";
			hasBlackJack = true;
		} else {
			message = "You're out of the game!";
			isAlive = false;
		}

		console.log(message);
}

// This function is to render the game and display the cards and sum on the screen

function renderGame() {
    console.log(firstCard)
    console.log(secondCard)
    sumCards()
    
}

function newCard() {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    sumCards()
}