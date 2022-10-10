// define variables for HTML elements
// var resetButton = document.querySelector("btn-clear");
var resetButton = document.getElementById("btn-clear");

function populateScores() {
    var scores = JSON.parse(window.localStorage.getItem("scoreTracker")) || [];

    scores.sort(function(a, b) {
        return b.score - a.score;
      });

    scores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + " | " + score.score;
        var olEl = document.getElementById("scores-tracker");
        olEl.appendChild(liEl);
    });
}

// clear highscores by clearing local storage
function resetScores() {
    window.localStorage.removeItem("scoreTracker");
    window.location.reload();
}

// button to reset/clear out high scores
resetButton.addEventListener("click", resetScores);

// run the populateScores function on page load
populateScores();