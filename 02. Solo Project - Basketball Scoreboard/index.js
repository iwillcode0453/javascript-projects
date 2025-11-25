let counterHome = 0;
let counterGuest = 0;
let homeScore = document.getElementById("home-points");
let addOneHome = document.getElementById("home-btn-one");

addOneHome.addEventListener("click", function () {
	counterHome += 1;
	homeScore.textContent = counterHome;
});
