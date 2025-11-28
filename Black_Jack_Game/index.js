let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


let startBtn = document.getElementById("start-btn"); 
let messageEl = document.getElementById("message-el");

// function to start the game
function startGame() {
    if (sum < 21) {
			message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		    message = "Wohoo! You've got Blackjack!";
			hasBlackJack = true;
	} else {
			message = "You're out of the game!";
			isAlive = false;
	}
    // Display the message to the player with messageEl variable
    messageEl.textContent = message;
	
}

