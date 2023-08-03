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

const rolloOption = document.getElementById("button1");
const olavOption = document.getElementById("button2");
const leifOption = document.getElementById("button3");
const haraldOption = document.getElementById("button4");
const cnutOption = document.getElementById("button5");
const otherOption1 = document.getElementById("button6");
const otherOption2 = document.getElementById("button7");
const otherOption3 = document.getElementById("button8");
const otherOption4 = document.getElementById("button9");

const questionArea = document.getElementsByClassName("question");
const rolloQuestion = document.getElementById("rollo-question");
const olavQuestion = document.getElementById("olav-haraldsson-question");
const leifQuestion = document.getElementById("leif-erikson-question");
const haraldQuestion = document.getElementById("harald-hardrada-question");
const cnutQuestion = document.getElementById("cnut-the-great-question");

/* Let variables */
let options = ["Became Duke of Normandy", "Made London Bridge fall down", "Discovered America", "The Last Great Viking", "Established North Sea Empire", "Carried a 6 foot axe", "Had a blue tooth", "Conquered St Petersburg", "Invented the compass"];
let quitButton = document.getElementById("quit-button");
let vikingBiogs = [viking1, viking2, viking3, viking4, viking5];
let vikingIndex = 0;
let questionIndex = 0;
let nextQuitButton = document.getElementById("next-quit-button");
let nextIncorrectQuitButton = document.getElementById("incorrect-next-quit-button");
let initialStart = false;
let answerGrid = [rolloOption, olavOption, leifOption, haraldOption, cnutOption, otherOption1, otherOption2, otherOption3, otherOption4];
let questions = [rolloQuestion, olavQuestion, leifQuestion, haraldQuestion, cnutQuestion];

document.querySelector('#button1').textContent = options[0];
document.querySelector('#button2').textContent = options[1];
document.querySelector('#button3').textContent = options[2];
document.querySelector('#button4').textContent = options[3];
document.querySelector('#button5').textContent = options[4];
document.querySelector('#button6').textContent = options[5];
document.querySelector('#button7').textContent = options[6];
document.querySelector('#button8').textContent = options[7];
document.querySelector('#button9').textContent = options[8];

/* Event Listeners*/
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', (e) => startGame(e));
    quitButton.addEventListener('click', (e) => goHome(e));
    nextButton.addEventListener('click', showNextViking);
    nextButton.addEventListener('click', showNextQuestion);
    incorrectNextButton.addEventListener('click', showNextViking);
    incorrectNextButton.addEventListener('click', showNextQuestion);
    nextQuitButton.addEventListener('click', (e) => goHome(e));
    nextIncorrectQuitButton.addEventListener('click', (e) => goHome(e));
});
// correctOption.addEventListener('click', correctPopup);
// incorrectOption.addEventListener('click', incorrectPopup);

/* Functions */
/**
 * Starting Game:
 * 1. Prevents default setting requiring click before click (i.e. double click) to start game
 * 2. Identifies whether gameDisplay is active
 * 3. Sets homeDisplay to inactive and activates gameDisplay
 */

const startGame = function (e) {
    e.preventDefault();
    if (gameDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        homeDisplay.style.display = "none";
        gameDisplay.style.display = "inline-flex";
    } else {
        gameDisplay.style.display = "none";
    }
}

/**
 * Quitting Game:
 * 1. Prevents default setting requiring click before click (i.e. double click) to quit game
 * 2. Identifies whether homeDisplay is active
 * 3. Sets homeDisplay to active and hides gameDisplay
 */

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

/**
 * Answer feedback:
 * 1. If answer is correct, modal display is activated and correct answer popup appears
 * 2. If answer is incorrect, modalIncorrect activates incorrect answer popup
 */

function correctPopup() {
    modal.style.display = "block";
}
function incorrectPopup() {
    modalIncorrect.style.display = "block";
}

/**
 * Next question function:
 * 1. Sets Next question button on answer feedback popup to close the popup and move to the next question
 */

nextButton.onclick = function () {
    modal.style.display = "none";
}
incorrectNextButton.onclick = function () {
    modalIncorrect.style.display = "none";
}

/**
 * Move to the next Viking in the list of Vikings (vikingBiogs) when the Button Next Question is clicked:
 * 1. Set display of all vikings to hidden
 * 2. Activate next Viking when Next Question is clicked through incrementing the vikings (vikingBiogs) using the index (vikingIndex)
 */

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

/**
 * Linking Question to the description of the Viking: (DRAFT)
 * 1. Set first question as the Rollo question
 * 2. Link the topics (Vikings) to the Questions using the dataset and switch attributes
 * 3. Change question when the topic (viking1) changes
 */

function showNextQuestion() {
    if (questionIndex < questions.length) {
        // Hiding all Vikings apart from current
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = 'none';
        }
    }
    // Showing the next question
    questions[questionIndex].style.display = 'inline-flex';
    questionIndex++;
}
// Showing the first list item initially
showNextQuestion();

/* Matching tile to question */

    // Get all buttons with class "cell"
    const answerButtons = document.querySelectorAll(".cell");

    // Add click event listener to each button
    answerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Get the data-viking attribute of the clicked button
            const questionId = button.dataset.questionId;

            // Use the questionId to select the corresponding question element
            const question = document.querySelector(`[data-viking="${questionId}"]`);

            // Do whatever you want with the question element
            if (question === button) {
                correctPopup();
            } else {
                incorrectPopup;
            }
        });
    });