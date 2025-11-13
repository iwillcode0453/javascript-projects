// Targetting elements and setting it up to their respective variables.

let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", function() {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
})

resetBtn.addEventListener("click", function() {
    count = 0;
    saveEl.textContent = "Previous entries: "
})


