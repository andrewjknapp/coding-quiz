# coding-quiz

## Purpose
This quiz was made to provide those learning Javascript a way to test their knowledge. The questions included are meant to test entry level learners on syntax and proper use of various elements of javascript. 

## Implementation
Each of the pages on this coding quiz are made on one html file. To update the quiz a class called hide is added or taken away which sets the display property to none. The questions and answers are stored in an array of objects called questionContent in the script.js file. Each index of this array is a question object containing the question, the correct answer, and the array of answer choices. The question and choices are dynamaically updated and randomized to be displayed to the user. The user choice is compared to the correct answer in the question object to determine if the user has chosen correctly. If the user is correct time will be added to the timer which counts down and if the user is incorrect time is taken way. At the end the user's final score is equal to the time that they have remaining. The user can then add their initials which get displayed on the highscore page. These records do not get carried over once the window is closed, but if the user wishes to erase their scores before this time they can do so using the Clear Highscores button. Below I have listed the structure of the questionContent array.

questionContent = [  
    question1 = {  
        question: "This is where the text for the question is stored",  
        correctAns: "This is where the correct answer is stored.",  
        answerArray: ["Each question", "option is", "entered in", "this array"]  
    }  
]
- repeat questions as desired. Do not include ordering numbers or markings as these are added once they are displayed.