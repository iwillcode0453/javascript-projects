let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

// This is the option #1 way to do it;
fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let fighter1 = Math.floor(Math.random() * fighters.length);
    let fighter2 = Math.floor(Math.random() * fighters.length);
    // randomly select two animals from the array
    stageEl.textContent = fighters[fighter1] + " vs " + fighters[fighter2];
    console.log(fighters[fighter1] + " vs " + fighters[fighter2]);
})
// Hints:

// This option #2 way to do it;
// function  getRandomFighter() {
// 	// Challenge:
// 	// When the user clicks on the "Pick Fighters" button, pick two random
// 	// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// 	let randomFighterOne = Math.floor(Math.random() * fighters.length);
// 	let randomFighterTwo = Math.floor(Math.random() * fighters.length);
// 	stageEl.textContent =
// 		fighters[randomFighterOne] + " vs " + fighters[randomFighterTwo];
// }