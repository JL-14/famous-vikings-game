
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
var correctOption = document.getElementById("button1");
var modalIncorrect = document.getElementById("incorrect-answer");
var incorrectOption = document.getElementById("button2");
var nextButton = document.getElementById("next-question-button");

correctOption.onclick = function() {
  modal.style.display = "block";
}

incorrectOption.onclick = function() {
    modalIncorrect.style.display = "block";
}

/* Creating Viking list for next question function */
let viking1 = document.getElementById("rollo");
let viking2 = document.getElementById("olav-haraldsson");
let viking3 = document.getElementById("leif-erikson");
let viking4 = document.getElementById("harald-hardrada");
let viking5 = document.getElementById("cnut-the-great");

let vikingBiogs = [viking1, viking2, viking3, viking4, viking5];

let vikingIndex = 0;

// Function to show the next list item
function showNextViking() {
    if (vikingIndex < vikingBiogs.length) {      
      // Hiding all Vikings apart from current
      for (let i = 0; i < vikingBiogs.length; i++) {         
        vikingBiogs[i].style.display = 'none';
      }
  } 
      // Showing the next list item
      vikingBiogs[vikingIndex].style.display = 'inline-flex';
      vikingIndex++;
  }
// When the user clicks on Next Question button, close the modal and go to next question
    nextButton.onclick = function() {
    modal.style.display = "none";
}
    // Showing the first list item initially
    showNextViking();
    // Adding event listener to the next button
    nextButton.addEventListener('click', showNextViking);

/* Quit button on popups to return to Home Page */
let nextQuitButton = document.getElementById("next-quit-button");
nextQuitButton.onclick = function goHome() {
    if (homeDisplay.style.display === "none") {
        modal.style.display = "none";
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}

let nextIncorrectQuitButton = document.getElementById("incorrect-next-quit-button");
nextIncorrectQuitButton.onclick = function goHome() {
    if (homeDisplay.style.display === "none") {
        modal.style.display = "none";
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}