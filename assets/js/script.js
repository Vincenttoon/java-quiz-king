const questionArr = [
    {
        question: "Inside which HTML element do we put the Javascript?"
        choices: {
            a: "A. <js>",
            b: "B. <script>",
            c: "C. <javascript>",
            d: "D. <scripting>",
        }
    }
];

// ^^ vv posible variables
var highscore = document.querySelector(".high-score");
var clock = document.querySelector(".timer");
var welcome = document.querySelector(".welcome");
var rules = document.querySelector(".rules");
var questions = document.querySelector(".questions");
var results = document.querySelector(".results");
var scores = [];
var index = 0;

function home() {
    // create high score button
    var viewScores = document.createElement("button");
        viewScores.classList.add("btn", "header", "view-scores")
        viewScores.textContent = "High Scores";
    console.log(viewScores);

    // create timer and seconds
    var countTimer = document.createElement("p");
        countTimer.classList.add("header", "countdown");
        countTimer.textContent = "Time Remaining: ";
    console.log(countTimer);
    var countSecond = document.createElement("span");
        countSecond.setAttribute("id", "seconds");
        countTimer.appendChild(countSecond);

    // home screen header and text explaining rules
    var welcomeTitle = document.createElement("h1");
        welcomeTitle.classList.add("title");
        welcomeTitle.textContent = "Speed Coding Quiz!";
    console.log(welcomeTitle);

    var welcomeText = document.createElement("p");
        welcomeText.classList.add("text");
        welcomeText.textContent = "Try to answers these questions right as fast as possible! For every wrong answer you will lose time. At the end of the quiz, your time remaining will be your score. Try to beat your high score!";
    console.log(welcomeText);

    // start quiz button
    var quizBtn = document.createElement("button");
        quizBtn.classList.add("btn", "start-quiz");
        quizBtn.textContent = "Begin";
    console.log(quizBtn);

    // appending to create page
    highscore.appendChild(viewScores);
    clock.appendChild(countTimer);
    welcome.appendChild(welcomeTitle);
    welcome.appendChild(welcomeText);
    welcome.appendChild(quizBtn);

    // event listener to start quiz and start timer (need timer function)
    document.querySelector(".start-quiz").addEventListener("click", fallingTime);
    
}

// start quiz function

function startQuiz () {

}

// possible functions

home();


