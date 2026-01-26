// This is a function - it's like a recipe that tells the computer how to play the game
function startGame() {
	// Create a list of the three choices in Rock Paper Scissors
	const choices = ["Rock", "Paper", "Scissors"];

	// Ask the player to type their choice and save it
	const userChoice = prompt("Enter your choice (Rock, Paper, Scissors):");

	// Check if the player typed something that's NOT in our choices list
	if (!choices.includes(userChoice)) {
		// If they picked something wrong, show an error message
		alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
		// Exit the function and don't continue the game
		return;
	}

	// Pick a random choice for the computer from our list
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	// Create a variable to store the game result (empty for now)
	let result = "";

	// Check if both players chose the same thing
	if (userChoice === computerChoice) {
		// If they match, it's a tie!
		result = "It's a tie!";
		// If the first condition wasn't true, check if the player won
	} else if (
		// Rock beats Scissors
		(userChoice === "Rock" && computerChoice === "Scissors") ||
		// Paper beats Rock
		(userChoice === "Paper" && computerChoice === "Rock") ||
		// Scissors beats Paper
		(userChoice === "Scissors" && computerChoice === "Paper")
	) {
		// If any of those are true, the player wins!
		result = "You win!";
		// If none of the above are true, the computer won
	} else {
		result = "Computer wins!";
	}

	// Show the player their choice, the computer's choice, and who won
	alert(
		`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`
	);
}
