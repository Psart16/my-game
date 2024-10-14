// script.js

// Get the button and result elements
const rollDiceBtn = document.getElementById("roll-dice-btn");
const diceResult = document.getElementById("dice-result");

// Add a click event listener to the button
rollDiceBtn.addEventListener("click", function() {
  // Roll a random number between 1 and 6
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  // Display the result
  diceResult.textContent = "You rolled a " + diceRoll + "!";
});
