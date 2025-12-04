let firstCard = getRandomCard();
let secondCard = getRandomCard();
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
let faceCardEl = document.getElementById("faceCard");

// Create a function getRandomCard that always return 5
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber === 1) {
		faceCardEl.textContent = `You got an Ace!`;
		return 11;
	} else if(randomNumber > 10 && randomNumber <= 13) {
		faceCardEl.textContent = `You got a face card!`;
		return 10;
	} else {
		return randomNumber;
	}
}

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
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	console.log(cards);
	renderGame();
	}