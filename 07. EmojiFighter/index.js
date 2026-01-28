let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

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