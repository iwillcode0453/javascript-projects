// let purchaseButton = document.getElementById('purchase-button');
// let errorMessage = document.getElementById('error');

// purchaseButton.addEventListener('click', function() {
//     errorMessage.textContent = 'Something went wrong, please try again later!'
// })

// let cards = [7, 3, 5]

// for (let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i])
// }

let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
	greetingEl.textContent += sentence[i] + " ";
	console.log(greetingEl.textContent);
}

const personObject = {
	name: "Erickson",
	age: 47,
	country: "Philippines"
}

function logData() {
	console.log(`${personObject.name} is ${personObject.age} years old and lives in the ${personObject.country}.`)
}

let age = 15;

if (age < 6) {
	console.log("Free");
} else if(age < 18) {
	console.log("Child Discount")
} else if(age < 27) {
	console.log("Student Discount")
} else if (age < 67) {
	console.log("Full Price")
} else {
	console.log("Senior Citizen Discount")
}