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

// variables for handling html elements
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#countdown");
var questionText = document.querySelector("#questions");
var answerButtons = document.querySelector("#answers");
var button1 = document.querySelector("#choice1");
var button2 = document.querySelector("#choice2");
var button3 = document.querySelector("#choice3");
var button4 = document.querySelector("#choice4");
var result = document.querySelector("#feedback");
var resultScreen = document.querySelector("#end-screen");
var playerScore = document.querySelector("#score");
var playerInitials = document.querySelector("#initials");
var submitScore = document.querySelector("#submit-button");

// variables for timing
var questionIndex = 0;
var secondsLeft = timer.textContent;

// Starts the quiz: Hides the start section, loads the question/answer, calls time to start
function playGame() {
    startScreen.setAttribute("hidden", "true");
    questionText.removeAttribute("hidden", "true");
    answerButtons.removeAttribute("hidden", "true");
    startTimer();
    pullQuestion();
}

// Sets timer and runs it
function startTimer() {
    timerS = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerS);
            endGame();
        }
    }, 1000);
};

// Gets question from the questions array and applys them to the quiz section (question and 4 answer buttons)
function pullQuestion() {
    var openQuestion = questions[questionIndex];
    questionText.textContent = questions[questionIndex].question;
    
    button1.textContent = questions[questionIndex].choices[0];
    button2.textContent = questions[questionIndex].choices[1];
    button3.textContent = questions[questionIndex].choices[2];
    button4.textContent = questions[questionIndex].choices[3];
}

function answer() {
    result.removeAttribute("hidden", "true");
    if (this.textContent !== questions[questionIndex].answer) {
        secondsLeft -= 15;
        result.textContent = "Wrong!!! Time lost.";
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        timer.textContent = secondsLeft;
        endGame();
    } else {
        result.textContent = "Correct, Good Job!"
    }

    // only show the result of last click for a brief period (1.5 seconds = 1500)
    setTimeout(function() {
        result.setAttribute("hidden", "true");
    }, 1500);

    // increase index to go to next question
    questionIndex++;

    // if we are done with questions end, otherwise get another question set
    if (questionIndex === questions.length) {
        endGame();
    } else {
        pullQuestion();
    }
}

// when this is called the quiz ends
function endGame() {
    clearInterval(timerS);
    questionText.setAttribute("hidden", "true");
    answerButtons.setAttribute("hidden", "true");
    resultScreen.removeAttribute("hidden", "true");
    result.setAttribute("hidden", "true");
    playerScore.textContent = secondsLeft;
}

function saveScore() {
    // get value of input box
    var initials = playerInitials.value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      var highscores = JSON.parse(window.localStorage.getItem("scoreTracker")) || [];
      
      var addScore = {
        score: secondsLeft,
        initials: initials
      };
  
      highscores.push(addScore);
      localStorage.setItem("scoreTracker", JSON.stringify(highscores));
  
    window.location.href = "highscores.html";
    }
  }

// button listener to start playing the game
startButton.addEventListener("click", playGame);

// button listeners for the answer buttons
button1.addEventListener("click", answer);
button2.addEventListener("click", answer);
button3.addEventListener("click", answer);
button4.addEventListener("click", answer);

// button listener for the submit button to add new score
submitScore.addEventListener("click", saveScore);
    