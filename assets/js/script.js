
/* Randomise options in question grid */

let options = ["Became Duke of Normandy", "Discovered America", "Established North Sea Empire", "The Last Great Viking", "Made London Bridge fall down", "Carried a 6 foot axe", "Had a blue tooth", "Conquered St Petersburg", "Invented the compass"];

function randomOptions() {

    for (let i = 0; i < options.length; i++) {
        let randomNum = Math.floor(Math.random() * options.length);
        let tempOptions = "";
        let currentOptions = options[i];
        let shuffledOptions = options[randomNum];

        tempOptions = currentOptions;
        options[i] = shuffledOptions;
        options[randomNum] = tempOptions;
    }

    document.querySelector('#button1').textContent = options[0];
    document.querySelector('#button2').textContent = options[1];
    document.querySelector('#button3').textContent = options[2];
    document.querySelector('#button4').textContent = options[3];
    document.querySelector('#button5').textContent = options[4];
    document.querySelector('#button6').textContent = options[5];
    document.querySelector('#button7').textContent = options[6];
    document.querySelector('#button8').textContent = options[7];
    document.querySelector('#button9').textContent = options[8];
}

/* Start button launching game */
let gameDisplay = document.getElementById("game-screen");
let homeDisplay = document.getElementById("home-screen");
let startButton = document.getElementById("start-button");

startButton.onclick = function startGame() {
    if (gameDisplay.style.display === "none") {
        homeDisplay.style.display = "none";
        gameDisplay.style.display = "inline-flex";
        randomOptions();
    } else {
        gameDisplay.style.display = "none";
    }
}

/* Quit button to return to Home Page */
let quitButton = document.getElementById("quit-button");
quitButton.onclick = function goHome() {
    if (homeDisplay.style.display === "none") {
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
        shuffle(arr);
    } else {
        homeDisplay.style.display = "none";
    }
};

/* Correct answer popup */
var modal = document.getElementById("correct-answer");

// Get the button that opens the modal
var correctOption = document.getElementById("button1");

// Get the button that closes the modal
var nextButton = document.getElementById("next-question-button");

// When the user clicks on the button, open the modal
correctOption.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
nextButton.onclick = function() {
  modal.style.display = "none";
}

/* Quit button to return to Home Page */
let nextQuitButton = document.getElementById("next-quit-button");
nextQuitButton.onclick = function goHome() {
    if (homeDisplay.style.display === "none") {
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
        shuffle(arr);
    } else {
        homeDisplay.style.display = "none";
    }
};
 