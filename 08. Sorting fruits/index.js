let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let sortFruitBtn = document.getElementById("sortFruit")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

  // declare a sorted variable to false to run the sorting
  let sorted = false;

  sortFruitBtn.addEventListener("click", function() {
    for (let i = 0; i < fruit.length; i++) {
      if (!sorted) {
         if (fruit[i] === "🍎") {
						appleShelf.textContent += fruit[i];
					} else if (fruit[i] === "🍊") {
						orangeShelf.textContent += fruit[i];
					} 
      }
      
    }
    // set sorted variable to true to prevent re-sorting; it will be labeled to false again and not run the sorting code again
    sorted = true; 
  });