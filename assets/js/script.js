const questionArr = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: {
            a: "A. <js>",
            b: "B. <script>",
            c: "C. <javascript>",
            d: "D. <scripting>"
        }
        
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            a: "A. In its own <div> section",
            b: "B. The <body> section",
            c: "C. The <head> section",
            d: "D. The <footer> section"
        }
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'",
        choices: {
            a: "A. <script src='xxx.js'",
            b: "B. <script name='xxx.js'",
            c: "C. <script href='xxx.js'",
            d: "D. <script link='xxx.js'",
        }
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            a: "A. In its own <div> section",
            b: "B. The <body> section",
            c: "C. The <head> section",
            d: "D. The <footer> section"
        }
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: {
            a: "A. msg('Hello World')",
            b: "B. alertBox('Hello World')",
            c: "C. alert('Hello World')",
            d: "D. msgBox('Hello World')"
        }
    },
    {
        question: "How do you create a function in Javascript?",
        choices: {
            a: "A. function = myFunction()",
            b: "B. function:myFunction()",
            c: "C. Function MyFunction()",
            d: "D. function myFunction()"
        }
    },
    {
        question: "How do you call a function called 'myFunction'?",
        choices: {
            a: "A. call function myFunction()",
            b: "B. call myFunction()",
            c: "C. myFunction()",
            d: "D. var myFunction()"
        }
    },
    {
        question: "How to write an IF statement in Javascript?",
        choices: {
            a: "A. if i = 5 then",
            b: "B. if (i == 5)",
            c: "C. if i = 5",
            d: "D. if i == 5 then"
        }
    },
    {
        question: "How can you add a comment in Javascript?",
        choices: {
            a: "A. // This is a comment",
            b: "B. <!-- This is a comment -->",
            c: "C. 'This is a comment",
            d: "D. *This is a comment*"
        }
    },
    {
        question: "How do you declare a Javascript variable?",
        choices: {
            a: "A. variable carName",
            b: "B. v carName",
            c: "C. v function (carName)",
            d: "D. var carName"
        }
    },
];

// ^^ vv posible variables
var highscore = document.querySelector(".high-score");
var clock = document.querySelector(".timer");
var welcome = document.querySelector(".welcome");
var questions = document.querySelector(".questions");
var container = document.querySelector(".question-container");
var divider = document.querySelector(".divider");
var results = document.querySelector(".results");
var scores = [];
var index = 0;

function home() {
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
    welcome.appendChild(welcomeTitle);
    welcome.appendChild(welcomeText);
    welcome.appendChild(quizBtn);

    // event listener to start quiz and start timer (need timer function)
    document.querySelector(".start-quiz").addEventListener("click", startQuiz);
    
}

// start quiz function

function startQuiz () {

    // create container for quiz content
    if (index < questionArr.length) {
        var quizBox = document.createElement("div");
            quizBox.classList.add("box");
            container.appendChild(quizBox);
            
        var quizHeader = document.createElement("h2");
            quizHeader.classList.add("title");
            quizHeader.textContent = questionArr[index].question;
            quizBox.appendChild(quizHeader);

        var setChoices = questionArr[index].options;
        for (var x in setChoices) {
            var quizOpt = document.createElement("button");
            quizOpt.classList.add("btn btn-answer");
            if (x === questionArr[index].choice) {
                quizOpt.setAttribute("check", "correct");
            }
            quizOpt.textContent = setChoices[x];
            quizBox.appendChild(quizOpt);
        }

        index++;

        divider.style.visibility = "visible";

        // click option
    }
};





// possible functions
// correct answer
// timer
// final result
// ^^name insert
// save score
// logged high score list

home();


