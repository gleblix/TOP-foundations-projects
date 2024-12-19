let humanScore = 0;
let computerScore = 0;

const resultMessage = document.querySelector("#resultMessage");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");

function updateScoreDisplay() {
    humanScoreText.textContent = `Human Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

document.addEventListener('click', pressButton)

// used event delegation here, as per javascript tutorial
// all click events 
function pressButton(e) {
    let id = e.target.getAttribute('id');
    if (id == 'reset') {
        resetGame();
    } else if (id == 'rock' || id == 'paper' || id == 'scissors') {
        playGame(e);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    // Keeps spacing the same whether results are displayed or not
    // to avoid buttons jumping around
    resultMessage.innerHTML = '<br>'.repeat(3);
}

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

function playGame(e) {
    let humanChoice = e.target.getAttribute('id');
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

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
    }

    function tie() {
        resultMessage.innerHTML = `You chose ${capitalize(humanChoice)}.<br>
        The Computer chose ${capitalize(computerChoice)}.<br>
        It's a tie!`;
    }

    function humanWins() {
        resultMessage.innerHTML = `You chose ${capitalize(humanChoice)}.<br>
        The Computer chose ${capitalize(computerChoice)}.<br>
        You win!`;
        humanScore++;
        updateScoreDisplay();
    }

    function computerWins() {
        resultMessage.innerHTML = `You chose ${capitalize(humanChoice)}.<br>
        The Computer chose ${capitalize(computerChoice)}.<br>
        The Computer wins!`;
        computerScore++;
        updateScoreDisplay();
    }
}

// Utility functions / Code Library

// Returns a random integer from num1 (inclusive) to num2 (inclusive)
// Where num1, num2 both positive integers with num1 < num2
function randomIntFromInterval (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

//Capitalizes a word
function capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

//let event1 = new Event('click', {bubbles: true});
//let rockBtn = document.querySelector('#rock');
//rockBtn.dispatchEvent(event1);