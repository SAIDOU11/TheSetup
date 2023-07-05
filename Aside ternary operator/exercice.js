const playerGuess = 9;
const corrrectAnswer = 6;

const logMessage =
  playerGuess < corrrectAnswer
    ? "Too low"
    : playerGuess > corrrectAnswer
    ? "Too high"
    : "Exactly right";

console.log(logMessage);
