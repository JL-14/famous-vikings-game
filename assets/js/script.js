/* Const variables */
const gameDisplay = document.getElementById("game-screen");
const homeDisplay = document.getElementById("home-screen");
const startButton = document.getElementById("start-button");

const modal = document.getElementById("correct-answer");
const modalIncorrect = document.getElementById("incorrect-answer");
const finalModal = document.getElementById("final-correct-answer"); 
const finalModalIncorrect = document.getElementById("final-incorrect-answer");
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

const answerButtons = document.querySelectorAll(".cell");

/* Let variables */
let options = ["Became Duke of Normandy", "Made London Bridge fall down", "Discovered America", "The Last Great Viking", "Established North Sea Empire", "Carried a 6 foot axe", "Had a blue tooth", "Conquered St Petersburg", "Invented the compass"];
let quitButton = document.getElementById("quit-button");
let finalQuitButton = document.getElementById("final-next-quit-button");
let finalIncorrectQuitButton = document.getElementById("final-incorrect-next-quit-button");
let vikingBiogs = [viking1, viking2, viking3, viking4, viking5];
let vikingIndex = 0;
let questionIndex = 0;
let answerIndex = 0;
let nextQuitButton = document.getElementById("next-quit-button");
let nextIncorrectQuitButton = document.getElementById("incorrect-next-quit-button");
let initialStart = false;
let answerGrid = [rolloOption, olavOption, leifOption, haraldOption, cnutOption, otherOption1, otherOption2, otherOption3, otherOption4];
let questions = [rolloQuestion, olavQuestion, leifQuestion, haraldQuestion, cnutQuestion];
let questionText = ["Question: What title did Rollo have in France?", "Question: What landmark did Olav destroy?", "Question: What did Leif find?", "Question: What was Harald known as?", "Question: What did Cnut rule over?"];

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
    finalQuitButton.addEventListener('click', (e) => goHome(e));
    finalIncorrectQuitButton.addEventListener('click', (e) => goHome(e));
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
 * Show instructions
 * 
 */

const instructions = document.getElementById("instructions");
const overlay = document.getElementById("overlay");

const instructionsLink = document.getElementById("instructions-link");
instructionsLink.addEventListener('click', () => instructions.style.display = "block");
instructionsLink.addEventListener('click', () => overlay.style.display = "block");

const closeInstructions = document.getElementById("close-instructions");
closeInstructions.addEventListener('click', () => instructions.style.display = "none");
closeInstructions.addEventListener('click', () => overlay.style.display = "none");

// /* Randomise options in question grid */

// function randomOptions() {
//     window.alert("The current order is: " + options);

//     for (let i = 0; i < options.length; i++) {
//         let randomNum = Math.floor(Math.random() * options.length);
//         let tempOptions = "";
//         let currentOptions = options[i];
//         let shuffledOptions = options[randomNum];

//         tempOptions = currentOptions;
//         options[i] = shuffledOptions;
//         options[randomNum] = tempOptions;
//     }
//     window.alert("The shuffled options are: " + options);
// }

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
    window.addEventListener('click',()=>{ location.reload()});
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
        // randomOptions();
    } else {
        homeDisplay.style.display = "none";
    }
    confirm("Are you sure you want to quit?");
}

/**
 * Answer feedback:
 * 1. If answer is correct, modal display is activated and correct answer popup appears
 * 2. If answer is incorrect, modalIncorrect activates incorrect answer popup
 */

function correctPopup() {
    modal.style.display = "block";
    overlay.style.display = "block";
}
function incorrectPopup() {
    modalIncorrect.style.display = "block";
    overlay.style.display = "block";
}

function finalCorrectPopup() {
    finalModal.style.display = "block";
    overlay.style.display = "block";
}
function finalIncorrectPopup() {
    finalModalIncorrect.style.display = "block";
    overlay.style.display = "block";
}

/**
 * Next question function with score update:
 * 1. Sets Next question button on answer feedback popup to close the popup and move to the next question
 * 2. Update scores on correct or incorrect answer
 */

nextButton.onclick = function() {
let oldRightScore = parseInt(document.getElementById("right").innerText);
	document.getElementById("right").innerText = ++oldRightScore;
    modal.style.display = "none";
    overlay.style.display = "none";
    // randomOptions();
}

incorrectNextButton.onclick = function() {
    let oldWrongScore = parseInt(document.getElementById("wrong").innerText);
	document.getElementById("wrong").innerText = ++oldWrongScore;
    modalIncorrect.style.display = "none";
    overlay.style.display = "none";
    // randomOptions();
}

/**
 * Move to the next Viking in the list of Vikings (vikingBiogs) when the Button Next Question is clicked:
 * 1. Set display of all vikings to hidden
 * 2. Activate next Viking when Next Question is clicked through incrementing the vikings (vikingBiogs) using the index (vikingIndex)
 */

function showNextViking() {
    if (vikingIndex < vikingBiogs.length) {
        for (let i = 0; i < vikingBiogs.length; i++) {
            vikingBiogs[i].style.display = 'none';
        }
    }
    vikingBiogs[vikingIndex].style.display = 'inline-flex';
    vikingIndex++;
}
showNextViking();

/**
 * Linking Question to the description of the Viking
 * 1. Set first question as the Rollo question
 * 2. Link the topics (Vikings) to the Questions using the dataset and switch attributes
 * 3. Change question when the topic (viking1) changes
 */

function showNextQuestion() {
    if (questionIndex < questions.length) {
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = 'none';
        }
    }
    questions[questionIndex].style.display = 'inline-flex';
    questionIndex++;
}
showNextQuestion();

/**
 * Matching tile to question
 * 
 *  
 * 
 */

if (answerIndex < questions.length) {
    for (let i = 0; i < questions.length; i++) {
        answerIndex[i];
    }
}

answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (answerIndex <= 3) {
            let currentQuestion = questions[answerIndex];
            const currentQuestionData = currentQuestion.dataset.viking;
            if (button.textContent === currentQuestionData) {
                console.log("match");
                correctPopup();
            } else {
                console.log("wrong");
                incorrectPopup();
            }
        } else if (answerIndex = 4) {
            let currentQuestion = questions[answerIndex];
            const currentQuestionData = currentQuestion.dataset.viking;
            if (button.textContent === currentQuestionData) {
                console.log("match");
                finalCorrectPopup();
            } else {
                console.log("wrong");
                finalIncorrectPopup();
            }
        } else {
            console.log("out of index");
            incorrectPopup();
        }
        answerIndex++;
    });
});

/**
 * Code to bring up finish screen with score
 * 
 * 
 */

finishButton = document.getElementById("finish-button");
finishButton.addEventListener('click', successEndScreen);

function successEndScreen(){
    successScreen.style.display = "block";
    overlay.style.display = "block";
    finalModal.style.display = "none";
    finalModalIncorrect.style.display = "none";
    let oldRightScore = parseInt(document.getElementById("right").innerText);
	document.getElementById("right").innerText = ++oldRightScore;
}

finishIncorrectButton = document.getElementById("finish-incorrect-button");
finishIncorrectButton.addEventListener('click', failureEndScreen);

function failureEndScreen(){
    failureScreen.style.display = "block";
    overlay.style.display = "block";
    finalModal.style.display = "none";
    finalModalIncorrect.style.display = "none";
    let oldWrongScore = parseInt(document.getElementById("wrong").innerText);
	document.getElementById("wrong").innerText = ++oldWrongScore;
}

/**
 * Finish screen -Success (Score 4 or 5)
 * 
 * 
 */

const successScreen = document.getElementById("success-finish-screen");

//Result
let result = document.getElementById("right").textContent;
let wrongResult = document.getElementById("wrong").textContent;

let scoreMessage = "You scored " + result + " out of 5!";
console.log(scoreMessage);
const para = document.createElement("p");
const resultNode = document.createTextNode(scoreMessage);
para.appendChild(resultNode);
console.log(resultNode);

const finalScore = document.getElementById("success-final-score");
finalScore.appendChild(resultNode);
console.log(finalScore);

//Return home button
const returnHomeButton = document.getElementById("return-home");
returnHomeButton.addEventListener('click', (e) => finalHome(e));

const finalHome = function (e) {
    e.preventDefault();
    window.addEventListener('click',()=>{ location.reload()});
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}

function endGame() {
    successScreen.style.display = "none";
    overlay.style.display = "none";
}

/**
 * Finish screen -Failure (Score 0-3)
 * 
 * 
 */

const failureScreen = document.getElementById("failure-finish-screen");

//Result update
let badResult = document.getElementById("right").textContent;

let badScoreMessage = "You scored " + result + " out of 5!";

const badPara = document.createElement("p");
const badResultNode = document.createTextNode(badScoreMessage);
para.appendChild(badResultNode);

const badFinalScore = document.getElementById("failure-final-score");
badFinalScore.appendChild(badResultNode);

//Return home button
const failureHomeButton = document.getElementById("failure-return-home");
failureHomeButton.addEventListener('click', (e) => failureHome(e));

const failureHome = function (e) {
    e.preventDefault();
    window.addEventListener('click',()=>{ location.reload()});
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}


