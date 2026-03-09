const prompt = require("prompt-sync")();

const correctNumber = 7;
let guess;

while (true) {
    const input = prompt("Guess a number (or type 'q' to quit): ");

    if (input.toLowerCase() === 'q') {
        console.log("Game exited.");
        break; // stop the loop
    }

    guess = Number(input);

    if (guess === correctNumber) {
        console.log("You guessed correctly!");
        break;
    } else {
        console.log("Wrong guess, try again.");
    }
}