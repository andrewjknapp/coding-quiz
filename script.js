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

let pageArray = [startPage, questionPage, intitialEnter, highscorePage];


    viewScores.addEventListener("click", openHighscorePage);
    startButton.addEventListener("click", startQuiz);
    submitInitial.addEventListener("click", openHighscorePage);
    goBack.addEventListener("click", openStartPage);

//Takes a function of all DOM pointers as an array and adds clase hide to each
function hideAll() {
    for (let i=0; i<pageArray.length; i++) {
        if (!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}

let isQuizzing = false; //Will be True when questions are on the screen
let quizTime = 5; //quizTime is how may seconds the test will last.
let secondsLeft; //current number of seconds left on timer
timer.textContent = "Time: " + quizTime; //Prints initial timer on screen

function startQuiz() {

    secondsLeft = quizTime;
    isQuizzing = true;

    hideAll();
    questionPage.classList.remove('hide');
    
    let timerInterval = setInterval(function() {
        
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || !isQuizzing) {
            clearInterval(timerInterval);
            secondsLeft = quizTime;
            timer.textContent = "Time: " + secondsLeft;
            
            if (isQuizzing) {
                openInitialsPage();
            }
        }
        
    }, 1000);

    return "";
}

function openInitialsPage() {
    hideAll();
    intitialEnter.classList.remove('hide');
}

function openHighscorePage() {
    isQuizzing = false;
    hideAll();
    highscorePage.classList.remove('hide');
}

function openStartPage() {
    hideAll();
    startPage.classList.remove('hide');
}


    

