const randomNumber1 = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => randomNumber1(1, 6);

const player1Result = rollDice();
const player2Result = rollDice();

const player1 = document
  .querySelector(".img1")
  .setAttribute(`src`, `./images/dice${player1Result}.png`);
const player2 = document
  .querySelector(".img2")
  .setAttribute(`src`, `./images/dice${player2Result}.png`);

if (player1Result > player2Result) {
  document.querySelector(".container h1").innerHTML = "⛳️ Player 1 Wins";
} else if (player1Result < player2Result) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins ⛳️";
} else {
  document.querySelector(".container h1").innerHTML = "Draw 🏳️";
}
