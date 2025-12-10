let hands = ["rock", "paper", "scissors"]

// function for random computer choice out of the array
function getHand()  {
    let handPick = hands[Math.floor(Math.random() * hands.length)]; 
    console.log(handPick);
}