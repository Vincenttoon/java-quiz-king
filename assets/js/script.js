const questionArr = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: {
            a: "A. <js>",
            b: "B. <script>",
            c: "C. <javascript>",
            d: "D. <scripting>"
        },
        answer: "b"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            a: "A. In its own <div> section",
            b: "B. The <body> section",
            c: "C. The <head> section",
            d: "D. The <footer> section"
        },
        answer: "b"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'",
        choices: {
            a: "A. <script src='xxx.js'",
            b: "B. <script name='xxx.js'",
            c: "C. <script href='xxx.js'",
            d: "D. <script link='xxx.js'",
        },
        answer: "a"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            a: "A. In its own <div> section",
            b: "B. The <body> section",
            c: "C. The <head> section",
            d: "D. The <footer> section"
        },
        answer: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: {
            a: "A. msg('Hello World')",
            b: "B. alertBox('Hello World')",
            c: "C. alert('Hello World')",
            d: "D. msgBox('Hello World')"
        },
        answer: "c"
    },
    {
        question: "How do you create a function in Javascript?",
        choices: {
            a: "A. function = myFunction()",
            b: "B. function:myFunction()",
            c: "C. Function MyFunction()",
            d: "D. function myFunction()"
        },
        answer: "d"
    },
    {
        question: "How do you call a function called 'myFunction'?",
        choices: {
            a: "A. call function myFunction()",
            b: "B. call myFunction()",
            c: "C. myFunction()",
            d: "D. var myFunction()"
        },
        answer: "c"
    },
    {
        question: "How to write an IF statement in Javascript?",
        choices: {
            a: "A. if i = 5 then",
            b: "B. if (i == 5)",
            c: "C. if i = 5",
            d: "D. if i == 5 then"
        },
        answer: "b"
    },
    {
        question: "How can you add a comment in Javascript?",
        choices: {
            a: "A. // This is a comment",
            b: "B. <!-- This is a comment -->",
            c: "C. 'This is a comment",
            d: "D. *This is a comment*"
        },
        answer: "a"
    },
    {
        question: "How do you declare a Javascript variable?",
        choices: {
            a: "A. variable carName",
            b: "B. v carName",
            c: "C. v function (carName)",
            d: "D. var carName"
        },
        answer: "d"
    }
];

// ^^ vv possible variables
var highscore = document.querySelector(".high-score");
var clock = document.querySelector(".timer");
var welcome = document.querySelector(".welcome");
var questions = document.querySelector(".questions");
var container = document.querySelector(".question-container");
var divider = document.querySelector(".divider");
var results = document.querySelector(".results");
var scores = [];
var index = 0;
var mark = 0;

function home() {

    var removeAll = container;
    while(removeAll.hasChildNodes()) {
        removeAll.removeChild(removeAll.firstChild);
    };

    // create high score button
    var viewScores = document.createElement("button");
        viewScores.classList.add("btn", "header", "view-scores")
        viewScores.textContent = "High Scores";

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

    var welcomeText = document.createElement("p");
        welcomeText.classList.add("text");
        welcomeText.textContent = "Try to answers these questions right as fast as possible! For every wrong answer you will lose time. At the end of the quiz, your time remaining will be your score. Try to beat your high score!";

    // start quiz button
    var quizBtn = document.createElement("button");
        quizBtn.classList.add("btn", "start-quiz");
        quizBtn.textContent = "Begin";

    // appending to create page
    highscore.appendChild(viewScores);
    clock.appendChild(countTimer);
    container.appendChild(welcomeTitle);
    container.appendChild(welcomeText);
    container.appendChild(quizBtn);

    // event listener to start quiz and start timer (need timer function)
    document.querySelector(".start-quiz").addEventListener("click", timer);
    
}

// start quiz function

function startQuiz () {

    var removeAll = container;
    while(removeAll.hasChildNodes()) {
        removeAll.removeChild(removeAll.firstChild);
    };

    // create container for quiz content
    if (index < questionArr.length) {
        var quizBox = document.createElement("div");
            quizBox.classList.add("box");
            container.appendChild(quizBox);
            
        var quizHeader = document.createElement("h2");
            quizHeader.classList.add("title");
            quizHeader.textContent = questionArr[index].question;
            quizBox.appendChild(quizHeader);

        var choicesObj = questionArr[index].choices;
        for (var x in choicesObj) {
            var quizOption = document.createElement("button");
            quizOption.classList.add("btn", "btn-answer");
            if (x === questionArr[index].answer) {
                quizOption.setAttribute("check", "correct");
            }
            quizOption.textContent = choicesObj[x];
            quizBox.appendChild(quizOption);
        }

        index++;

        // click option
    }
};

// set timer function

function timer(){

    let timeleft = 60;
    const downloadTimer = setInterval(() => {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        document.getElementById(".progressBar").value = 60 - timeleft;
        timeleft -= 1;
    }, 1000);

    startQuiz()
    console.log(downloadTimer);
};





// possible functions
// correct answer
// timer
// final result
// ^^name insert
// save score
// logged high score list

home();


