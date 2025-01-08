let displayHomeScore = document.getElementById("home-score")
let displayAwayScore = document.getElementById("away-score")

let scoreHome = 0
let scoreAway = 0

displayHomeScore.textContent += scoreHome
displayAwayScore.textContent += scoreAway
//Home Scores
function addHomeScore1(){
    scoreHome += 1
    displayHomeScore.textContent = scoreHome
}

function addHomeScore2(){
    scoreHome += 2
    displayHomeScore.textContent = scoreHome
}

function addHomeScore3(){
    scoreHome += 3
    displayHomeScore.textContent = scoreHome
}
//Away Scores
function addAwayScore1(){
    scoreAway += 1
    displayAwayScore.textContent = scoreAway
}

function addAwayScore2(){
    scoreAway += 2
    displayAwayScore.textContent = scoreAway
}

function addAwayScore3(){
    scoreAway += 3
    displayAwayScore.textContent = scoreAway
}

function btnReset(){
    scoreHome = 0
    scoreAway = 0
    displayHomeScore.textContent = scoreHome
    displayAwayScore.textContent = scoreAway
}