// 

let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.innerText = count;
});

// let counting = 0;
// let countElem = document.getElementById("count-el");
 
// function increment() {
//     counting += 1;
//     countElem.innerText = counting;
// }