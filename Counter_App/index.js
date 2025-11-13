// Targetting elements and setting it up to their respective variables.

let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", function() {
    count += 1; //when the icrement button is clicked, add 1 to count
    countEl.textContent = count; //update the count-el in the HTML to reflect the niew count value on the page
});

saveBtn.addEventListener("click", function() {
    saveEl.textContent += count + " - "; //append the current count value followed by the hypen to the save-el element
    count = 0; // reset the count to 0
    countEl.textContent = count; //update the countEl element to show the reset count value 0
})

resetBtn.addEventListener("click", function() {
    count = 0; //when clicked, count will be reeset to 0
    saveEl.textContent = "Previous entries: "; // clear the saveEl content on the page
    countEl.textContent = count; //update the countEl element to show the reset count value 0
})


