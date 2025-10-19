// ======================= SCORE SETUP =======================

// Load score from localStorage
let score = JSON.parse(localStorage.getItem('score'));

// If score doesn't exist, initialize with default values
if (score === null) {
    score = { wins: 0, losses: 0, ties: 0 }
}

// Display initial score on screen
document.querySelector('.score-text').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;



// ======================= BUTTON SELECTION =======================

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset-btn');
const autoButton = document.querySelector('.auto-btn');



// ======================= BUTTON EVENT LISTENERS =======================

rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));
resetButton.addEventListener('click', () => resetScore());
autoButton.addEventListener('click', () => autoPlay());



// ======================= KEYBOARD SUPPORT =======================

// Detect keys for quick input
function keyDown(key) {
    if (key === 'r' || key === 'q') playGame('Rock');
    if (key === 'p' || key === 'w') playGame('Paper');
    if (key === 's' || key === 'e') playGame('Scissors');
}

// Listen for keyboard events
document.body.addEventListener('keydown', () => keyDown(event.key));



// ======================= RESET SCORE =======================

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');

    document.querySelector('.score-text').innerHTML =
        `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}



// ======================= COMPUTER MOVE GENERATOR =======================

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber <= 1 / 3) computerMove = 'Rock';
    else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) computerMove = 'Paper';
    else computerMove = 'Scissors';

    return computerMove;
}



// ======================= AUTO PLAY FEATURE =======================

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            let playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}



// ======================= MAIN GAME FUNCTION =======================

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    // Compare moves and update score
    if (playerMove === computerMove) {
        result = `TIE!`;
        score.ties++;
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = `You WIN!`;
        score.wins++;
    } else {
        result = `You Lose!`;
        score.losses++;
    }

    // Save score
    localStorage.setItem('score', JSON.stringify(score));

    // Update score on UI
    document.querySelector('.score-text').innerHTML =
        `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

    // Update match visuals
    moveDisplay();
    resultDisplay();

    // Show selected moves with image
    function moveDisplay() {
        document.querySelector('.match-display').innerHTML = `
            You: <img src="img/${playerMove.toLowerCase()}.png" alt="${playerMove}" width="50" height="50"> 
            | Computer: <img src="img/${computerMove.toLowerCase()}.png" alt="${computerMove}" width="50" height="50">
        `;
    }

    // Show result text
    function resultDisplay() {
        document.querySelector('.result-text').innerHTML = result;
    }
}
