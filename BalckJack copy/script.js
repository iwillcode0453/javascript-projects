
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.getElementById("cards-El")

let resetBtn = document.getElementById("reset-btn")
let titleEl = document.getElementById("title")
let newCardBtn = document.getElementById("newCard-btn")
let startBtn = document.getElementById("start-btn")

// This function is to get a random card and return its value based on the rules of the game
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

// This function is to start the game and initialize the cards and sum and also set the isAlive variable to true and call the renderGame function to display the cards and sum on the screen    
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
	renderGame();
}

// This function is to render the game and display the cards and sum on the screen and also display the message based on the sum of the cards   
function renderGame() {
	cardsEl.textContent = "Cards: ";
    // Create a for loop to display all the cards in the array
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}

	messageEl.textContent = message;
}

// This function is to draw a new card and add it to the sum and cards array
function newCard() {
     if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
                   sum += card;
				   cards.push(card);
				   cardsEl.textContent = cards;
				   renderGame();
	} else {
        messageEl.textContent = "You can't draw a new card!" 
    }
}

// This function is to reset the game and start a new game

function resetGame() {
    cardsEl.textContent = "Cards: " 
	sumEl.textContent = "Sum: " 
	messageEl.textContent = ""
    
}