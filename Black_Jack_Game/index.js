// Create a player object to store the name and chips
let player = {
	name: "Erick",
	chips: 150
}
// Black Jack Game JavaScript Code
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
// Display player name and chips on playerEl variable
playerEl.textContent = player.name + ": $" + player.chips;


 

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
	// let startBtn = document.getElementById("start-btn");
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;	
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
    if (sum <= 20) {
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
	// let newCardBtn = document.getElementById("new-card-btn");
		
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		console.log(cards);
		renderGame();
	} else {
		console.log("You cannot draw a new card!");	
		
	}
	
}

	console.log(`This is the card array: ${cards}`)