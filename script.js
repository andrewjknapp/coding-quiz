//Header
let viewScores = document.getElementById('view-scores');
let timer = document.getElementById('timer');
//Main
//Start Page
let startPage = document.getElementById('start-page');
let startButton = document.getElementById('start-button');
//Question Page
let questionPage = document.getElementById('question-page');
let question = document.getElementById('question');
let answers = document.getElementById('answers');
let feedback = document.getElementById('feedback');
//Initials Page
let intitialEnter = document.getElementById('initial-enter');
let initialText = document.getElementById('initial-text');
let submitInitial = document.getElementById('submit-initial');
//Highscore Page
let highscorePage = document.getElementById('highscore-page');
let goBack = document.getElementById('go-back');
let clearHighscores = document.getElementById('clear-highscores');

startButton.addEventListener("click", startQuiz);

let secondsLeft = 75;
function startQuiz() {
  var timerInterval = setInterval(function() {
    
    timer.textContent = "Time: " + secondsLeft;
    secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
       
    }

  }, 1000);
}

