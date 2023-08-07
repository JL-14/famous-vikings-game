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

const instructions = document.getElementById("instructions");
const overlay = document.getElementById("overlay");
const instructionsLink = document.getElementById("instructions-link");
const closeInstructions = document.getElementById("close-instructions");

const successScreen = document.getElementById("success-finish-screen");
const failureScreen = document.getElementById("failure-finish-screen");

const finishButton = document.getElementById("finish-button");
const finishIncorrectButton = document.getElementById("finish-incorrect-button");

/* Let variables */
let options = ["Became Duke of Normandy", "Made London Bridge fall down", "Discovered America", "The Last Great Viking", "Established North Sea Empire", "Carried a 6 foot axe", "Had a blue tooth", "Conquered St Petersburg", "Invented the compass"];
let quitButton = document.getElementById("quit-button");
let finalQuitButton = document.getElementById("final-next-quit-button");
let finalIncorrectQuitButton = document.getElementById("final-incorrect-next-quit-button");
let vikingBiogs = [viking1, viking2, viking3, viking4, viking5];
let vikingIndex = 0;
let questionIndex = 0;
let answerIndex = 0;
let scoreIndex = 0;
let nextQuitButton = document.getElementById("next-quit-button");
let nextIncorrectQuitButton = document.getElementById("incorrect-next-quit-button");
let initialStart = false;
let answerGrid = [rolloOption, olavOption, leifOption, haraldOption, cnutOption, otherOption1, otherOption2, otherOption3, otherOption4];
let questions = [rolloQuestion, olavQuestion, leifQuestion, haraldQuestion, cnutQuestion];
let questionText = ["Question: What title did Rollo have in France?", "Question: What landmark did Olav destroy?", "Question: What did Leif find?", "Question: What was Harald known as?", "Question: What did Cnut rule over?"];

let wrongResult = document.getElementById("wrong").textContent;



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
    instructionsLink.addEventListener('click', () => instructions.style.display = "block");
instructionsLink.addEventListener('click', () => overlay.style.display = "block");
closeInstructions.addEventListener('click', () => instructions.style.display = "none");
closeInstructions.addEventListener('click', () => overlay.style.display = "none");
});
// correctOption.addEventListener('click', correctPopup);
// incorrectOption.addEventListener('click', incorrectPopup);

/* Functions */
/**
 * Randomise tiles in question grid
 * 1. 
 * 
 */

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
 * Start Game:
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
 * Quit Game:
 * 1. Prevents default setting requiring click before click (i.e. double click) to quit game
 * 2. Identifies whether homeDisplay is active
 * 3. Sets homeDisplay to active and hides gameDisplay
 * 4. Activates confirmation that user wants to quit
 */

const goHome = function (e) {
    e.preventDefault();
    window.addEventListener('click', () => { location.reload() });
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
 * 2. Separate function for the final question, bringing up final answer popup
 * 3. If answer is incorrect, modalIncorrect activates incorrect answer popup
 * 4. Separate function for the final question, bringing up final answer popup
 * 5. For a correct answer the 'right' score increases by 1
 * 6. For an incorrect answer the 'wrong' score increases by 1
 */

function correctPopup() {
    modal.style.display = "block";
    overlay.style.display = "block";
    let oldRightScore = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++oldRightScore;
}
function finalCorrectPopup() {
    finalModal.style.display = "block";
    overlay.style.display = "block";
    let oldRightScore = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++oldRightScore;
}
function incorrectPopup() {
    modalIncorrect.style.display = "block";
    overlay.style.display = "block";
    let oldWrongScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldWrongScore;
}
function finalIncorrectPopup() {
    finalModalIncorrect.style.display = "block";
    overlay.style.display = "block";
    let oldWrongScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldWrongScore;
}

/**
 * Close answer popups on moving to next question:
 * 1. Use Next question button on answer feedback popup to close the popup and overlay
 */

nextButton.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
    // randomOptions();
}
incorrectNextButton.onclick = function () {
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
 * Change question alongside the change of Viking
 * 1. Set first question as the Rollo question
 * 2. Move through the questions in the same order as the Vikings to ensure they match
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
 * Match tile to question, calculate and display score, and activate appropriate popup
 * 1. Create answer index to match questions 1-4 and then separate match for question 5 to display final question popup
 * 2. Take the final score (number of correct answers) and write into:
 *      -Right fifth answer, linking to success game screen (4-5 correct answers)
 *      -Right fifth answer, linking to failed game screen (1-3 correct answers)
 *      -Wrong fifth answer, linking to success game screen (4-5 correct answers)
 *      -Wrong fifth answer, linking to failed game screen (1-3 correct answers)
 */

if (answerIndex < questions.length) {
    for (let i = 0; i < questions.length; i++) {
        answerIndex[i];
    }
}

answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //Set the correct answer for the first four questions (1-4)
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
        //Set the correct answer for the fifth question, bringing up the appropriate final answer popup
        } else if (answerIndex = 4) {
            let currentQuestion = questions[answerIndex];
            const currentQuestionData = currentQuestion.dataset.viking;
            if (button.textContent === currentQuestionData) {
                //Final result screen after correct final answer
                console.log("match");
                finalCorrectPopup();
                    //Calculating the final score and writing it into the final result screen
                        let result = document.getElementById("right").innerHTML;
                        let scoreMessage = "You scored " + result + " out of 5!";
                            if (result >= "4") {
                                //Correct final answer, success game screen
                                const para = document.createElement("p");
                                const resultNode = document.createTextNode(scoreMessage);
                                para.appendChild(resultNode);
                                const finalScore = document.getElementById("success-final-score");
                                finalScore.appendChild(resultNode);
                                console.log(result);
                                finishButton.addEventListener('click', successEndScreen);
                                function successEndScreen() {
                                    successScreen.style.display = "block";
                                    overlay.style.display = "block";
                                    finalModal.style.display = "none";
                                    finalModalIncorrect.style.display = "none";
                                }
                            } else {
                                //Correct final answer, failed game screen
                                let badResult = document.getElementById("right").innerHTML;
                                let badScoreMessage = "You scored " + badResult + " out of 5!";
                                const badPara = document.createElement("p");
                                const badResultNode = document.createTextNode(badScoreMessage);
                                badPara.appendChild(badResultNode);
                                const badFinalScore = document.getElementById("failure-final-score");
                                badFinalScore.appendChild(badResultNode);
                                console.log(badResult);
                                finishButton.addEventListener('click', failureEndScreen);
                                function failureEndScreen() {
                                    failureScreen.style.display = "block";
                                    overlay.style.display = "block";
                                    finalModal.style.display = "none";
                                    finalModalIncorrect.style.display = "none";
                                }
                            }
            } else {
                //Final result screen after wrong final answer
                console.log("wrong");
                finalIncorrectPopup();
                //Calculating the final score and writing it into the final result screen                   
                    let badResult = document.getElementById("right").innerHTML;
                    let badScoreMessage = "You scored " + badResult + " out of 5!";
                            //Wrong final answer, success game screen
                            if (badResult >= "4") {
                                let result = document.getElementById("right").innerHTML;
                                let scoreMessage = "You scored " + result + " out of 5!";
                                const para = document.createElement("p");
                                const resultNode = document.createTextNode(scoreMessage);
                                para.appendChild(resultNode);
                                const finalScore = document.getElementById("success-final-score");
                                finalScore.appendChild(resultNode);
                                console.log(result);
                                finishIncorrectButton.addEventListener('click', successEndScreen);
                                function successEndScreen() {
                                    successScreen.style.display = "block";
                                    overlay.style.display = "block";
                                    finalModal.style.display = "none";
                                    finalModalIncorrect.style.display = "none";
                                }
                            } else {
                                //Wrong final answer, failed game screen
                                const badPara = document.createElement("p");
                                const badResultNode = document.createTextNode(badScoreMessage);
                                badPara.appendChild(badResultNode);
                                const badFinalScore = document.getElementById("failure-final-score");
                                badFinalScore.appendChild(badResultNode);
                                console.log(badResult);
                                finishIncorrectButton.addEventListener('click', failureEndScreen);
                                function failureEndScreen() {
                                    failureScreen.style.display = "block";
                                    overlay.style.display = "block";
                                    finalModal.style.display = "none";
                                    finalModalIncorrect.style.display = "none";
                                }
                            }
            }
        } else {
            //Answer popup for tiles that are always incorrect (no matching question)
            console.log("out of index");
            incorrectPopup();
        }
        answerIndex++;
    });
});

/**
 * Return home buttons for end-of-game screens
 * 1. On click to return home, activates the home screen and hides other active screens (popups and game screen)
 * 2. Restarts game
 */

//Return home button for success screen
const returnHomeButton = document.getElementById("return-home");
returnHomeButton.addEventListener('click', (e) => finalHome(e));
const finalHome = function (e) {
    e.preventDefault();
    window.addEventListener('click', () => { location.reload() });
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}
//Return home button for failed game screen
const failureHomeButton = document.getElementById("failure-return-home");
failureHomeButton.addEventListener('click', (e) => failureHome(e));

const failureHome = function (e) {
    e.preventDefault();
    window.addEventListener('click', () => { location.reload() });
    if (homeDisplay.style.display === "none" || initialStart === false) {
        initialStart === true;
        gameDisplay.style.display = "none";
        homeDisplay.style.display = "block";
    } else {
        homeDisplay.style.display = "none";
    }
}


