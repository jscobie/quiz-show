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
var timer = document.querySelector("#countdown");

var secondsLeft = timer.textContent;

startButton.addEventListener("click", function(event) {
    console.log("here we go");
    startTimer();
    
});


function startTimer() {
    // Sets timer
    timerS = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerS)
            alert("game over");
        }
        }, 1000);
      }