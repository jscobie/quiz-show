const questions = ["Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within _______.", 
"Arrays in JavaScript can be used to store _______.",
"String values must be enclosed within ________ when being assigned to variables",
"A very useful tool used during development and debugging for printing content to the debugger is:"];
const oneChoice = ["strings", "booleans", "alerts","numbers"];
const twoChoice = ["quotes", "curly brackets", "parenthesis", "square brackets"];
const threeChoice = ["numbers and strings", "other arrays", "booleans", "all of the above"];
const fourChoice = ["commas", "curly brackets", "quotes", "parenthesis"];
const fiveChoice = ["JavaScript", "terminal/bash", "for loops", "console.log"];
const correctAnswers = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];

var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#countdown");
var questionText = document.querySelector("#questions");
var answerButtons = document.querySelector("#answers");
var button1 = document.querySelector("#choice1");
var button2 = document.querySelector("#choice2");
var button3 = document.querySelector("#choice3");
var button4 = document.querySelector("#choice4");

var secondsLeft = timer.textContent;

startButton.addEventListener("click", function(event) {
    startTimer();
    startScreen.setAttribute("hidden", "true");
    startScreen.setAttribute("display", "");
    questionText.removeAttribute("hidden", "true");
    questionText.textContent = questions[0];
    button1.textContent = oneChoice[0];
    button2.textContent = oneChoice[1];
    button3.textContent = oneChoice[2];
    button4.textContent = oneChoice[3];
    answerButtons.removeAttribute("hidden", "true");
});

function startTimer() {
    // Sets timer
    timerS = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerS);
        }
        }, 100);
      }