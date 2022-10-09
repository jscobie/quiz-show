// Set object to house questions, choices, and correct answers
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        choices: ["quotes", "curly brakcets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]
var questionIndex = 0;
var secondsLeft = timer.textContent;

var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#countdown");
var questionText = document.querySelector("#questions");
var answerButtons = document.querySelector("#answers");
var button1 = document.querySelector("#choice1");
var button2 = document.querySelector("#choice2");
var button3 = document.querySelector("#choice3");
var button4 = document.querySelector("#choice4");



startButton.addEventListener("click", function(event) {
    startTimer();
    startScreen.setAttribute("hidden", "true");
    // startScreen.setAttribute("display", "");
    questionText.removeAttribute("hidden", "true");
    questionText.textContent = questions[questionIndex].question;
    button1.textContent = questions[questionIndex].choices[0];
    button2.textContent = questions[questionIndex].choices[1];
    button3.textContent = questions[questionIndex].choices[2];
    button4.textContent = questions[questionIndex].choices[3];
    answerButtons.removeAttribute("hidden", "true");
    button1.addEventListener("click", handleAnswerClick)
    button2.addEventListener("click", handleAnswerClick)
    button3.addEventListener("click", handleAnswerClick)
    button3.addEventListener("click", handleAnswerClick)
    button4.addEventListener("click", handleAnswerClick)

});

function handleAnswerClick (event) {
    console.log(event.target.textContent);
    questionIndex++;
    console.log(questionIndex);
}

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