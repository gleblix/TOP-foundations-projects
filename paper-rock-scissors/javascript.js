// javascript support file for html

// Returns a random choice of ['rock', 'paper', 'scissors']
// representing the computer's choice in the game.
function getComputerChoice() {
    let randomNumber = randomIntFromInterval(1, 3);
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

// Returns a random integer from num1 (inclusive) to num2 (inclusive)
// Where num1, num2 both positive integers with num1 < num2
function randomIntFromInterval (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

// Sends a prompt to the CLI requesting the user's choice of rock
// paper, scissors. If the user types a valid choice, that choice is
// returned (in lowercase). If the user types an invalid choice, 'rock'
// is returned.
function getHumanChoice() {
    let input = prompt("Choose rock, paper, or scissors: ");
    input = input.toLowerCase();

    if (input == 'rock' || input == 'paper' || input == 'scissors') {
        return input;
    }
    else {
        return 'rock';
    }
}
