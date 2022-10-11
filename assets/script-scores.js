// define variables for HTML elements
var resetButton = document.getElementById("btn-clear");

// shows the scores on the highscores page, sorted
function populateScores() {
    var scores = JSON.parse(window.localStorage.getItem("scoreTracker")) || [];

    // sorts the scores
    scores.sort(function(a, b) {
        return b.score - a.score;
      });

    // this runs through all scores stored and adds a list item for each
    scores.forEach(function(scores) {
        var liEl = document.createElement("li");
        liEl.textContent = scores.initials + " | " + scores.score;
        var olEl = document.getElementById("scores-tracker");
        olEl.appendChild(liEl);
    });
}

// clear highscores by clearing local storage item and reload page
function resetScores() {
    window.localStorage.removeItem("scoreTracker");
    window.location.reload();
}

// button to reset/clear out high scores
resetButton.addEventListener("click", resetScores);

// run the populateScores function on page load
populateScores();