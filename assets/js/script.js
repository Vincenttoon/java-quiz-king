const questionArr = [
    {

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

function home() {
    // create high score button
    var viewScores = document.createElement("button");
    viewScores.classList.add("header", "view-score")
    viewScores.textContent = "High Scores";
    console.log(viewScores);

    highscore.appendChild(viewScores);
    
}


// possible functions

home();


