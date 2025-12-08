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

// Object exercise
const personObject = {
	name: "Erickson",
	age: 47,
	country: "Philippines"
}

function logData() {
	console.log(`${personObject.name} is ${personObject.age} years old and lives in the ${personObject.country}.`)
}

// Condtional statements exercise
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

// Looping exercise
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
	console.log("The largest countries in world are: " + largeCountries[i] + ".");
}

// pop() and push() method and shift() and unshift() method exercise
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// Remove the first item in the array
largeCountries2.shift()
console.log(largeCountries2)
//  Replace the first item with "China"
largeCountries2.unshift("China")
console.log(`This is the shifted method result: ${largeCountries2}`)
// Remove the last item in the array with pop()
largeCountries2.pop()
console.log(`This is the popped method result: ${largeCountries2}`)
// Replace the last item with push()
largeCountries2.push("Pakistan")
console.log(`This is the pushed method result: ${largeCountries2}`)
