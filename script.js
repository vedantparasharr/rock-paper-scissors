    let score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
        score = {
            wins: 0,
            losses: 0,
            ties: 0
        }
    }

    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    const resetButton = document.querySelector('.reset-btn');
    const autoButton = document.querySelector('.auto-btn');

    function resetScore() {
        score.wins = 0;
                        score.losses = 0;
                        score.ties = 0;
                        localStorage.removeItem('score');
                        document.querySelector('.score-text').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    }

    rockButton.addEventListener('click',() => playGame('Rock'));
    paperButton.addEventListener('click',() => playGame('Paper'));
    scissorsButton.addEventListener('click',() => playGame('Scissors'));
    resetButton.addEventListener('click',() => resetScore());
    autoButton.addEventListener('click',() => autoPlay());

    function keyDown(key) {
        if(key === 'r' || key === 'q') playGame('Rock');
        if(key === 'p' || key === 'w') playGame('Paper');
        if(key === 's' || key === 'e') playGame('Scissors');
    } 

    document.body.addEventListener('keydown', () => keyDown(event.key));


    document.querySelector('.score-text').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

    function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber <= 1 / 3) computerMove = 'Rock';
        else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) computerMove = 'Paper';
        else computerMove = 'Scissors';
        return computerMove;
    }

    let isAutoPlaying = false;
    let intervalId;


    function autoPlay() {
        if(!isAutoPlaying){
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

    function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

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
            result = `You Lose!`
            score.losses++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.score-text').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        moveDisplay();
        resultDisplay();

        function moveDisplay() {
            document.querySelector('.match-display').innerHTML = `
                You: <img src="img/${playerMove.toLowerCase()}.png" alt="${playerMove}" width="50" height="50"> 
                | Computer: <img src="img/${computerMove.toLowerCase()}.png" alt="${computerMove}" width="50" height="50">
            `;
        }

        function resultDisplay() {
            document.querySelector('.result-text').innerHTML = result;
        }
    }
