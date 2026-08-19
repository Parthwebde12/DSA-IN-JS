let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;

while (guess !== random) {
    guess = Number(prompt("Guess the number"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Try again");
        continue;
    }

    if (guess > random) {
        console.log("Too high, try again");
    } else if (guess < random) {
        console.log("Too low, try again");
    }
}

console.log("Correct! The number was " + random);