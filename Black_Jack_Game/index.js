let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


let startBtn = document.getElementById("start-btn"); 
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


// function to start the game
function startGame() {
	// Display thea cards value with cardsel variable
    cardsEl.textContent = "Cards: " + firstCard + "," + secondCard;
	// Display the sum of the cards with sumEl variable
	sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
			message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		    message = "You've got Blackjack!";
			hasBlackJack = true;
	} else {
			message = "You're out of the game!";
			isAlive = false;
	}
    // Display the message to the player with messageEl variable
    messageEl.textContent = message;
	
}

// Function to draw a new card with newCardBtn varialble
function newCard() {
	console.log("Draw another card!")
}