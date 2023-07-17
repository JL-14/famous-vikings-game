/* Start button launching game */
let gameDisplay = document.getElementById("game-screen");
let homeDisplay = document.getElementById("home-screen");
let startButton = document.getElementById("start-button");

startButton.onclick = function startGame() {
    if (gameDisplay.style.display === "none") {
        homeDisplay.style.display = "none";
        gameDisplay.style.display = "inline-flex";
    } else {
        gameDisplay.style.display = "none";
    }
}
console.log(gameDisplay);
console.log(homeDisplay);

/* Quit button to return to Home Page */
let quitButton = document.getElementById("quit-button");
quitButton.onclick = function goHome() {
    if (homeDisplay.style.display === "none") {
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
};

/* Randomise options in question grid */
let firstOption = document.getElementById("button1");
let secondOption = document.getElementById("button2");
let thirdOption = document.getElementById("button3");
let fourthOption = document.getElementById("button4");
let fifthOption = document.getElementById("button5");
let sixthOption = document.getElementById("button6");
let seventhOption = document.getElementById("button7");
let eighthOption = document.getElementById("button8");
let ninthOption = document.getElementById("button9");

const optionArray = [firstOption, secondOption, thirdOption, fourthOption, 
    fifthOption, sixthOption, seventhOption, eighthOption, ninthOption];

function randomArray() {
    Math.floor(Math.random(optionArray));
}