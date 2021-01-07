let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}
const alertUser = (human) => {
  if (humanGuess > 9 || humanGuess < 0) {
    return 'Number out of range'
  }
}
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;