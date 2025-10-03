let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
  };

  updateScoreElement(); 
  /*
  OR!!

if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
}
  */

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
  } else {
    clearInterval(intervalId);  
    isAutoPlaying = false;        
  }
}

document.querySelector('.js-rock-btn')
.addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-paper-btn')
.addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissors-btn')
.addEventListener('click', () => {
  playGame('Scissors');
});

document.querySelector('.js-reset-btn')
.addEventListener('click', () => {
  score.wins = 0, 
      score.loses = 0, 
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
})

document.querySelector('.js-auto-play-btn')
.addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', event => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  } 
});

function playGame(playerMove){
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'Scissors'){
  if (computerMove === 'Rock') {
      result = 'You Lose'
  } else if (computerMove === 'Paper') {
      result = 'You Win'
  } else if (computerMove === 'Scissors') {
      result = 'Tie'
  }

}else if (playerMove === 'Paper'){
  if (computerMove === 'Rock') {
      result = 'You Win'
  } else if (computerMove === 'Paper') {
      result = 'Tie'
  } else if (computerMove === 'Scissors') {
      result = 'You Lose'
  }
  
}else if (playerMove === 'Rock'){
  if (computerMove === 'Rock') {
      result = 'Tie'
  } else if (computerMove === 'Paper') {
      result = 'You Lose'
  } else if (computerMove === 'Scissors') {
      result = 'You Win'
  }
}

if (result === 'You Win') {
  score.wins += 1;
} else if(result === 'You Lose'){
  score.loses += 1;
} else if(result === 'Tie'){
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src="images/img-${playerMove}-img.png" class="move-img">
<img src="images/img-${computerMove}-img.png" class="move-img"> Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Loses: ${score.loses},
      Ties: ${score.ties}`
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'Scissors';
  } 
  return computerMove;
}