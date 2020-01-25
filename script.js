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

//adds funcitonality to each button on index.html
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
let questionIndex;

function startQuiz() {

    secondsLeft = quizTime;
    isQuizzing = true;
    questionIndex = 0;
    hideAll();
    questionPage.classList.remove('hide');

    questionUpdater(questionContent, questionIndex);

   

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
}


//Function to change page to respective part of index.html
function openInitialsPage() {
    isQuizzing = false;
    hideAll();
    intitialEnter.classList.remove('hide');
}

function openHighscorePage() {
    isQuizzing = false;
    hideAll();
    highscorePage.classList.remove('hide');
}

function openStartPage() {
    isQuizzing = false;
    hideAll();
    startPage.classList.remove('hide');
}

    
let questionContent = [
    question1 = {
        question: "Which is not a primitive datatype in Javascript?",
        correctAns: "Integer",
        answerArray: ["Integer", "String", "Number", "Boolean"]
    },
    question2 = {
        question: "Which HTML tag do we use to link an HTML file and a Javascript file?",
        correctAns: "<script>",
        answerArray: ["<link>", "<src>", "<script>", "<body>"]
    },
    question3 = {
        question: "Which of these Javascripts returns a user defined string?",
        correctAns: "prompt()",
        answerArray: ["alert()", "prompt()", "confirm()", "console.log()"]
    }
]



function questionUpdater(array, index) {
    question.textContent = array[index].question;
    let ans;
    let but;

    for (let i=0; i<array[index].answerArray.length; i++) {

        ans = document.createElement('LI');
        but = document.createElement('button');
        
        ans.appendChild(but);
        but.textContent = i+1 + ". " + array[index].answerArray[i];
        ans.addEventListener("click", questionController);
        answers.appendChild(ans);
        

    }
    
}

function clearQuestion() {
    question.textContent = "";
    while(answers.hasChildNodes()) {
        answers.removeChild(answers.childNodes[0]);
    }
}

function questionController() {
    clearQuestion();
    questionIndex++;
    if (questionIndex < questionContent.length) {
        questionUpdater(questionContent, questionIndex);
    } else {
        openInitialsPage();
    }
    
}