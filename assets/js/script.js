/* Const variables */
const gameDisplay = document.getElementById("game-screen");
const homeDisplay = document.getElementById("home-screen");
const startButton = document.getElementById("start-button");

const modal = document.getElementById("correct-answer");
// const correctOption = document.getElementById("button1");
const modalIncorrect = document.getElementById("incorrect-answer");
// const incorrectOption = document.getElementById("button2");
const nextButton = document.getElementById("next-question-button");
const incorrectNextButton = document.getElementById("incorrect-next-question-button");

const viking1 = document.getElementById("rollo");
const viking2 = document.getElementById("olav-haraldsson");
const viking3 = document.getElementById("leif-erikson");
const viking4 = document.getElementById("harald-hardrada");
const viking5 = document.getElementById("cnut-the-great");

/* Let variables */

let options = ["Became Duke of Normandy", "Discovered America", "Established North Sea Empire", "The Last Great Viking", "Made London Bridge fall down", "Carried a 6 foot axe", "Had a blue tooth", "Conquered St Petersburg", "Invented the compass"];
let quitButton = document.getElementById("quit-button");
let vikingBiogs = [viking1, viking2, viking3, viking4, viking5];
let vikingIndex = 0;
let nextQuitButton = document.getElementById("next-quit-button");
let nextIncorrectQuitButton = document.getElementById("incorrect-next-quit-button");
let initialStart = false;

/**
 * Event listeners 
 *  Start Button:
*/
document.addEventListener('DOMContentLoaded', () => {
startButton.addEventListener('click', (e) => startGame(e));
quitButton.addEventListener('click', (e) => goHome(e));
nextButton.addEventListener('click', showNextViking);
incorrectNextButton.addEventListener('click', showNextViking);
nextQuitButton.addEventListener('click', (e) => goHome(e));
nextIncorrectQuitButton.addEventListener('click', (e) => goHome(e));
});
// correctOption.addEventListener('click', correctPopup);
// incorrectOption.addEventListener('click', incorrectPopup);

/** Functions
 * 
 */
// function randomOptions() {
//     for (let i = 0; i < options.length; i++) {
//         let randomNum = Math.floor(Math.random() * options.length);
//         let tempOptions = "";
//         let currentOptions = options[i];
//         let shuffledOptions = options[randomNum];

//         tempOptions = currentOptions;
//         options[i] = shuffledOptions;
//         options[randomNum] = tempOptions;
//     }
    document.querySelector('#button1').textContent = options[0];
    document.querySelector('#button2').textContent = options[1];
    document.querySelector('#button3').textContent = options[2];
    document.querySelector('#button4').textContent = options[3];
    document.querySelector('#button5').textContent = options[4];
    document.querySelector('#button6').textContent = options[5];
    document.querySelector('#button7').textContent = options[6];
    document.querySelector('#button8').textContent = options[7];
    document.querySelector('#button9').textContent = options[8];
// }

const startGame = function (e) {
    e.preventDefault();
    if (gameDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        homeDisplay.style.display = "none";
        gameDisplay.style.display = "inline-flex";
        // randomOptions();
    } else {
        gameDisplay.style.display = "none";
    }
}

const goHome = function (e) {
    e.preventDefault();
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
        // randomOptions();
    } else {
        homeDisplay.style.display = "none";
    }
}

function correctPopup () {
    modal.style.display = "block";
}
function incorrectPopup () {
    modalIncorrect.style.display = "block";
}

// When the user clicks on Next Question button, close the modal and go to next question
nextButton.onclick = function() {
modal.style.display = "none";
}
incorrectNextButton.onclick = function() {
modalIncorrect.style.display = "none";
}

// Function to show the next viking
function showNextViking() {
    if (vikingIndex < vikingBiogs.length) {      
    // Hiding all Vikings apart from current
    for (let i = 0; i < vikingBiogs.length; i++) {         
    vikingBiogs[i].style.display = 'none';
    }
} 
    // Showing the next viking
    vikingBiogs[vikingIndex].style.display = 'inline-flex';
    vikingIndex++;
}
// Showing the first list item initially
    showNextViking();


const rolloOption = document.getElementById("button1");
const olavOption = document.getElementById("button2");
const leifOption = document.getElementById("button3");
const haraldOption = document.getElementById("button4");
const cnutOption = document.getElementById("button5");
const otherOption1 = document.getElementById("button6");
const otherOption2 = document.getElementById("button7");
const otherOption3 = document.getElementById("button8");
const otherOption4 = document.getElementById("button9");

let answerGrid = [rolloOption, olavOption, leifOption, haraldOption, cnutOption, otherOption1, otherOption2, otherOption3, otherOption4];

const rolloQuestion = document.getElementById("rollo-question");
const olavQuestion = document.getElementById("olav-haraldsson-question");
const leifQuestion = document.getElementById("leif-erikson-question");
const haraldQuestion = document.getElementById("harald-hardrada-question");
const cnutQuestion = document.getElementById("cnut-the-great-question");

let questions = [rolloQuestion, olavQuestion, leifQuestion, haraldQuestion, cnutQuestion];

function showRolloOption () {
    rolloQuestion.style.display = 'block';
    olavQuestion.style.display = 'none';
    leifQuestion.style.display = 'none';
    haraldQuestion.style.display = 'none';
    cnutQuestion.style.display = 'none';
}

function showOlavOption () {
    rolloQuestion.style.display = 'none';
    olavQuestion.style.display = 'block';
    leifQuestion.style.display = 'none';
    haraldQuestion.style.display = 'none';
    cnutQuestion.style.display = 'none';
}

rolloOption.addEventListener('click', showRolloQuestion);
olavOption.addEventListener('click', showOlavOption);


// console.log(answerGrid);

// const correctAnswer = rolloOption;
// const incorrectAnswer = answerGrid.slice(0-8);

// function findCorrectAnswer (answerGrid) {
//     for (let i = 0; i < answerGrid.length; i++) {
//         const correctButton = answerGrid[i];
//         if (correctButton.textContent === "Became Duke of Normandy") {
//             correctPopup;
//         }
//     }
// }


// console.log(correctAnswer);
// console.log(correctButton);
// console.log(incorrectAnswer);

// correctButton.addEventListener('click', correctPopup);
// incorrectAnswer.addEventListener('click', incorrectPopup);

// function checkAnswer(rolloOption) {
//     const rolloAnswer = "Became Duke of Normandy";
//     const userAnswer = answerGrid.addEventListener('click', );



//     if (userAnswer === rolloAnswer) {
//         correctPopup();
//     } else {
//         incorrectPopup();
//     }
// }

/**
 * Rollo Correct Answer Popup
 */
if (document.getElements)
rolloOption.addEventListener('click', correctPopup);
olavOption.addEventListener('click', incorrectPopup);
leifOption.addEventListener('click', incorrectPopup);
haraldOption.addEventListener('click', incorrectPopup);
cnutOption.addEventListener('click', incorrectPopup);
otherOption1.addEventListener('click', incorrectPopup);
otherOption2.addEventListener('click', incorrectPopup);
otherOption3.addEventListener('click', incorrectPopup);
otherOption4.addEventListener('click', incorrectPopup);


// if (viking2) {
// olavOption.addEventListener('click', correctPopup);
// rolloOption.addEventListener('click', incorrectPopup);
// leifOption.addEventListener('click', incorrectPopup);
// haraldOption.addEventListener('click', incorrectPopup);
// cnutOption.addEventListener('click', incorrectPopup);
// otherOption1.addEventListener('click', incorrectPopup);
// otherOption2.addEventListener('click', incorrectPopup);
// otherOption3.addEventListener('click', incorrectPopup);
// otherOption4.addEventListener('click', incorrectPopup);
// }

// if (viking3) {
// leifOption.addEventListener('click', correctPopup);
// rolloOption.addEventListener('click', incorrectPopup);
// olavOption.addEventListener('click', incorrectPopup);
// haraldOption.addEventListener('click', incorrectPopup);
// cnutOption.addEventListener('click', incorrectPopup);
// otherOption1.addEventListener('click', incorrectPopup);
// otherOption2.addEventListener('click', incorrectPopup);
// otherOption3.addEventListener('click', incorrectPopup);
// otherOption4.addEventListener('click', incorrectPopup);
// }

// if (viking4) {
// haraldOption.addEventListener('click', correctPopup);
// }

// if (viking5) {
// cnutOption.addEventListener('click', correctPopup);
// }
