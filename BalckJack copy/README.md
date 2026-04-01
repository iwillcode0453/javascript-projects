to create a blakcjack game app
- first you need to create a cards list and set it to empy list []
- next create a sum variable,where you will add all the numbers on the list
- and then you will make hasBlackJack variable and set it to false for the mean time
- and also create a isAlive variable and set it to false, this will indicate that you are still able to play the game and your sum is not more than 21
**** and now for the functions
- create a getRandomCard() to have a 1-13 numbers of card
  * if the card is greater than 10 the return 10, if the card is equals to 1 then        return 11, else return the number that will appear randomly.
 
- and then create renderGame()
  * where you will display the cards on the cardsEl.variable on the html file.
  * then make a for loop where you will push all the cards[i] item on the cards []      list.
  * then you will display summed numbers in the sumEl.textContent = "Sum: " + sum
  * the condition is if the sum is less than or equals to 20, display to message varialble the words, "Do you want to draw a new card?", else if the  card is equals ==== to 21, display the word, "Wohoo! You got BlackJack!" and set the hasBlackJack variable to true, else if you have more than 21 then display, "You're out of the game!" and set the isAlive variable to false.
