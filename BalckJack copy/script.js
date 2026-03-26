let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cardsEl = document.getElementById("cards-El")
let sumEl = document.getElementById("sum-El")
let messageEl = document.getElementById("message-El")
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

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

		return message;
}

// This function is to render the game and display the cards and sum on the screen

function startGame() {
    console.log(firstCard)
    console.log(secondCard)
    cardsEl.textContent = cards 
    sumEl.textContent = sum 
    messageEl.textContent = sumCards();
}
    


function newCard() {
     if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
				cards.push(card);
				cardsEl.textContent = cards;
				sum += card;
				sumEl.textContent = sum;
                messageEl.textContent = sumCards();
	} else {
        messageEl.textContent = "You can't draw a new card!" 
    }
}