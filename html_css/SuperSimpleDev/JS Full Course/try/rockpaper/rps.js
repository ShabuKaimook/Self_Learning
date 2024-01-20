// score storage
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    ties: 0,
    losess: 0
};

updateScore();
// score storage


// computer move
function pickComputerMove() {
    const computerMove = Math.random();

    if (computerMove <= 1/3) return 'rock';
    else if (computerMove > 1/3 && computerMove <= 2/3) return 'paper';
    else return 'scissors';
}
// computer move


// game process start
function playGame(move){
    const computerMove = pickComputerMove();
    let result = '';

    // rock paper scissors start
    if (move === 'rock') {
        if (computerMove === 'rock') result = 'You Tie';
        else if (computerMove === 'paper') result = 'You Loss';
        else result = 'You Win';
    }else if (move === 'paper'){
        if (computerMove === 'rock') result = 'You Win';
        else if (computerMove === 'paper') result = 'You Tie';
        else result = 'You Loss';
    }else {
        if (computerMove === 'rock') result = 'You Loss';
        else if (computerMove === 'paper') result = 'You Win';
        else result = 'You Tie';
    }
    // rock paper scissors end

    // update score start
    if (result === 'You Win') score.wins++;
    else if (result === 'You Tie') score.ties++;
    else score.losess++;
    // update score end

    // set new score and show on display
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    document.querySelector('.win-display').innerHTML = result;
}
// game process end


// auto play
let isAuto = false;
let auto;
function autoPlay() {
    if (!isAuto){
        auto = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAuto = true
    }
    else {
        clearInterval(auto);
        isAuto = false;
    }
}
// auto play


// update score display start
function updateScore() {
    document.querySelector('.showScore').innerHTML =
    `Wins: ${score.wins}, Losess: ${score.losess}, Ties: ${score.ties}`;
}
// update score display end


// player click start
document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
    score.wins = 0;
    score.ties = 0;
    score.losess = 0;

    localStorage.removeItem('score');
    document.querySelector('.win-display').innerHTML = '';
    updateScore();
});


document.querySelector('.auto-play-button').addEventListener('click', () => {
    autoPlay();
});
// player click end


