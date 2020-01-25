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
submitInitial.addEventListener("click", openHighscorePage);
goBack.addEventListener("click", openStartPage);

let quizTime = 10;
let secondsLeft = quizTime;
function startQuiz() {

    startPage.classList.add('hide');
    questionPage.classList.remove('hide');

    let timerInterval = setInterval(function() {
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            openInitialsPage();
            secondsLeft = quizTime;
        }

        timer.textContent = "Time: " + secondsLeft;
        
    }, 1000);
}

function openInitialsPage() {
    questionPage.classList.add('hide');
    intitialEnter.classList.remove('hide');
}

function openHighscorePage() {
    intitialEnter.classList.add('hide');
    highscorePage.classList.remove('hide');
}

function openStartPage() {
    highscorePage.classList.add('hide');
    startPage.classList.remove('hide');
}

    

