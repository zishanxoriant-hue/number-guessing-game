const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
const secretNumber = Math.floor(Math.random() * 10) + 1;
 
function askGuess() {
  rl.question("Guess a number between 1 and 10 (or 'q' to quit): ", function(answer) {
    if (answer.toLowerCase() === 'q') {
      console.log("Game exited.");
      rl.close();
      return;
    }
    
    const guess = parseInt(answer);
 
    if (guess === secretNumber) {
      console.log("🎉 You guessed correctly!");
      rl.close();
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
      askGuess();
    } else {
      console.log("Too low! Try again.");
      askGuess();
    }
 
  });
}
 
askGuess();
