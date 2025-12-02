let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";



let startBtn = document.getElementById("start-btn"); 
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a renderGame function to invoke the startGame() function
function startGame() {
	renderGame();
}

// function to start the game
function renderGame() {
	// Display thea cards value with cardsel variable
    cardsEl.textContent = "Cards: ";
	// Create a for loop to show all teh cards in teh array
	for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
	}
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
	let card = 6;
	sum += card;
	cards.push(card);
	console.log(cards);
	renderGame();
	}