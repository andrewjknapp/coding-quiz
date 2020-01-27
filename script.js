let questionContent = [
    question1 = {
        question: "Which is not a primitive datatype in Javascript?",
        correctAns: "Flag",
        answerArray: ["Flag", "String", "Number", "Boolean"]
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
    },
    question4 = {
        question: "Which is the correct syntax for a for loop for looping through a given array?",
        correctAns: "for (let i = 0; i < array.length; i++) {};",
        answerArray: ["for ( i = 0, array.length, i++) {};",
                      "for (let i = 0, array.length; i++) {};",
                      "for ( i = 0; i < array.length; i++) {};",
                      "for (let i = 0; i < array.length; i++) {};",
                    ]
    },
    question5 = {
        question: "The condition in an if statement is enclosed in _____.",
        correctAns: "()",
        answerArray: ["{}", "[]", "()", "``"]
    }
]

//This will store each highscorer and their score
let highScorers = [];

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
let displayScore = document.getElementById('display-score');
let initialText = document.getElementById('initial-text');
let submitInitial = document.getElementById('submit-initial');
//Highscore Page
let highscorePage = document.getElementById('highscore-page');
let highscoreContainer = document.getElementById('highscore-container');
let goBack = document.getElementById('go-back');
let clearHighscores = document.getElementById('clear-highscores');

let pageArray = [startPage, questionPage, intitialEnter, highscorePage];

//adds funcitonality to each button on index.html
viewScores.addEventListener("click", openHighscorePage);
startButton.addEventListener("click", startQuiz);
submitInitial.addEventListener("click", organizeHighscores);
clearHighscores.addEventListener("click", clearHighScorers);
goBack.addEventListener("click", openStartPage);



//Takes a function of all DOM pointers as an array and adds clase hide to each
//Used in startQuiz(), openInitialsPage(), openHighscorePage(), and openStartpage()
function hideAll() {
    for (let i=0; i<pageArray.length; i++) {
        if (!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}

//Adds hide class to timer
//Used in openInitialsPage() and openHighscorePage()
function hideTimer() {
    if (!timer.classList.contains('hide')) {
        timer.classList.add('hide');
    }
}

let isQuizzing = false; //Will be True when questions are on the screen
let quizTime = 50; //quizTime is how may seconds the test will last.
let secondsLeft; //current number of seconds left on timer
timer.textContent = "Time: " + quizTime; //Prints initial timer on screen
let questionIndex;
let finalScore = 0;

//Outputs a randomized array including the numbers 0 to the length of an array
//Used to randomize the order of the questions
function questionOrder(arr) {
    let arrIndex = [];
    for (let i=0; i<arr.length; i++) {
        arrIndex.push(i);
    }
    return arrayShuffle(arrIndex);
}

//Used in conjunction with questionUpdater() for a random order of questions
let questionArrayOrder = questionOrder(questionContent);

//Sets the timer and displays the quiz. 
//Called by the event listener on the start button.
function startQuiz() {
    secondsLeft = quizTime;
    isQuizzing = true;
    questionIndex = 0;
    hideAll();
    questionPage.classList.remove('hide');

    clearQuestion();
    questionUpdater(questionContent, questionArrayOrder[questionIndex]);   

    //Timer. If the timer runs out then the initial page is opened.
    let timerInterval = setInterval(function() {
        
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || !isQuizzing) {
            clearInterval(timerInterval);
            secondsLeft = quizTime;
            
            
            if (isQuizzing) {
                finalScore = 0;
                openInitialsPage();
            }
        }
    }, 1000);
}

//Function to change page to respective part of index.html
function openInitialsPage() {
    hideTimer();
    displayScore.textContent = finalScore;
    isQuizzing = false;
    hideAll();
    intitialEnter.classList.remove('hide');
}

//Opens Highscore page
function openHighscorePage() {
    hideTimer();
    isQuizzing = false;
    hideAll();
    highscorePage.classList.remove('hide');
}

function organizeHighscores() {
    highScorers.push([finalScore, initialText.value]);

    highScorers.sort((a, b) => b[0] - a[0] );

    eraseHighscores();
    for (let i=0; i<highScorers.length; i++) {
        addInitial(highScorers[i]);
    }

    openHighscorePage();
}

// Reads text input as user initials and displays on Highscore page
// Called by the submitInitial button
function addInitial(index) {

    let newHighscore = document.createElement('div');
    newHighscore.textContent = index[0] + " --- " + index[1];
    newHighscore.classList.add("highscoreInitials");
    highscoreContainer.appendChild(newHighscore);

}

//Removes all children of #highscore-container
//Called by the clearHighscore button
function eraseHighscores() {
    while(highscoreContainer.hasChildNodes()) {
        highscoreContainer.removeChild(highscoreContainer.childNodes[0]);
    }
}

function clearHighScorers() {
    eraseHighscores();
    highScorers = [];
}

// Returns user to the initial page. Called by the Go Back button
function openStartPage() {
    timer.textContent = "Time: " + secondsLeft;
    timer.classList.remove('hide');
    isQuizzing = false;
    hideAll();
    startPage.classList.remove('hide');
}

// Randomizes the order of elements in an array
// Used in questionOrder() to randomize questions and in questionUpdater() 
// to randomize the order of answers
function arrayShuffle(arr) {
    return arr.sort(() => Math.random()-0.5);
}

function questionUpdater(array, index) {

    question.textContent = array[index].question;
    let ans;
    let but;
    let currentAnswerArray = arrayShuffle(array[index].answerArray);

    for (let i=0; i<currentAnswerArray.length; i++) {

        ans = document.createElement('LI');
        but = document.createElement('button');
        
        ans.appendChild(but);
        but.textContent = i+1 + ". " + currentAnswerArray[i];

        ans.addEventListener("click", questionController);
        
        answers.appendChild(ans);   
    }
}

// Removes questions and answers once an answer choice is chosen.
function clearQuestion() {
    question.textContent = "";
    while(answers.hasChildNodes()) {
        answers.removeChild(answers.childNodes[0]);
    }
}

//Determines and displays if answer is correct or false
// If there are more questions it calles questionUpdater() for the next question
// and calls openInitialsPage() if there are no more questions
function questionController(event) {
    
    if (event.target.textContent.substring(3) == questionContent[questionArrayOrder[questionIndex]].correctAns) {
        feedback.textContent = "Correct";
        secondsLeft += 5;
        
    } else {
        feedback.textContent = "Incorrect";
        secondsLeft -= 5;
    }
    timer.textContent = "Time: " + secondsLeft;
    setTimeout(function() {feedback.textContent = ""}, 1000);
    
    clearQuestion();
    questionIndex++;
    if (questionIndex < questionContent.length) {
        questionUpdater(questionContent, questionArrayOrder[questionIndex]);
    } else {
        finalScore = secondsLeft;
        openInitialsPage();
    }
}


