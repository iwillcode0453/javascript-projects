let counterHome = 0;
let counterGuest = 0;
// home team points display
let homeScore = document.getElementById("home-points");
// Home team buttons
let addOneHome = document.getElementById("home-btn-one");
let addTwoHome = document.getElementById("home-btn-two");
let addThreeHome = document.getElementById("home-btn-three");

// Guest team point display
let guestScore = document.getElementById("guest-points");

// Gest tem buttons
let addOneGuest = document.getElementById("guest-btn-one");
let addTwoGuest = document.getElementById("guest-btn-two");
let addThreeGuest = document.getElementById("guest-btn-three");

// Event listener for home team score +1 button
addOneHome.addEventListener("click", function () {
	counterHome += 1;
	homeScore.textContent = counterHome;
});

// Event Listener for home team score +2 button
addTwoHome.addEventListener("click", function () {
	counterHome += 2;
	homeScore.textContent = counterHome;
});

// Event Listener for home team score +3 button
addThreeHome.addEventListener("click", function () {
	counterHome += 3;
	homeScore.textContent = counterHome;
});

// Event Listener for quest team score +1 button
addOneGuest.addEventListener("click", function () {
	counterGuest += 1;
	guestScore.textContent = counterGuest;
});

// Event Listener for guest score team +2 button
addTwoGuest.addEventListener("click", function () {
	counterGuest += 2;
	guestScore.textContent = counterGuest;
});

// Event Listener for guest team score +3 button
addThreeGuest.addEventListener("click", function () {
	counterGuest += 3;
	guestScore.textContent = counterGuest;
});