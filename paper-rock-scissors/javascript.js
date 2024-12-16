// javascript support file for html

// Variable that tracks the user's score over one or more games.
let humanScore = 0;
// Variable that tracks the computer's score over one or more games.
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        switch (computerChoice) {
            case 'rock':
                tie();
                return;
            case 'paper':
                computerWins();
                return;
            case 'scissors':
                humanWins();
                return;
        }
    } else if (humanChoice == 'paper') {
        switch (computerChoice) {
            case 'rock':
                humanWins();
                return;
            case 'paper':
                tie();
                return;
            case 'scissors':
                computerWins();
                return;
        }
    } else if (humanChoice == 'scissors') {
        switch (computerChoice) {
            case 'rock':
                computerWins();
                return;
            case 'paper':
                humanWins();
                return;
            case 'scissors':
                tie();
                return;
        }
    }

    function tie() {
        console.log(`It's a tie! You both chose ${capitalize(humanChoice)}.`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
        return;
    }

    function humanWins() {
        console.log(`You win! ${capitalize(humanChoice)} ` +
        `beats ${capitalize(computerChoice)}.`);
        humanScore++;
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
        return;
    }

    function computerWins() {
        console.log(`The Computer wins! ${capitalize(computerChoice)} ` +
        `beats ${capitalize(humanChoice)}.`);
        computerScore++;
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
        return;
    }
}

//Utility functions

// Returns a random integer from num1 (inclusive) to num2 (inclusive)
// Where num1, num2 both positive integers with num1 < num2
function randomIntFromInterval (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

//Capitalizes a word
function capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}
