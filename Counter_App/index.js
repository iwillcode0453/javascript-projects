// 

let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", function() {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
})


// let counting = 0;
// let countElem = document.getElementById("count-el");
 
// function increment() {
//     counting += 1;
//     countElem.innerText = counting;
// }

