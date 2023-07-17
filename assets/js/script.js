/** Start button launching game */
let gameDisplay = document.getElementById("game-screen");
let homeDisplay = document.getElementById("home-screen");
let startButton = document.getElementById("start-button");

startButton.onclick = function() {
    if (gameDisplay.style.display === "none") {
        homeDisplay.style.display = "none";
        gameDisplay.style.display = "block";
    }
}