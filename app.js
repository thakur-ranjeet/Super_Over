let score=[0,1,2,3,4,5,6]
var turn;
var runs=0;
//team1 details
 var team1={
     name:"Australia",
     runs:[],
     score:0
 }


//team2 details
var team2={
    name:"India",
    runs:[],
    score:0
}

window.onload=()=>{
    //decide who's going to bat first
    selectTunrnToBat();
    //Update the button text
    updateButtonText();
    //update the initial score
    updateScore();
    //update team names
    updateTeamNames();
}

let selectTunrnToBat= () =>{
    turn=Math.round(Math.random())+1;
}

let updateButtonText= () =>{
    var button=document.getElementById("button");
    var result=document.getElementById("result");
    result.style.visibility="";
    //check if the game is over or not
    if(team1.runs.length==6&&team2.runs.length==6){
        button.remove();
    //check if match is draw
        result.textContent=team1.score==team2.score ? 'Match draw' : `${team1.score>team2.score? team1.name : team2.name} Wins`
    }
    else{
        turn=team1.runs.length===6? 2 :team2.runs.length===6 ? 1: turn
    }
    button.textContent= `${turn ===1 ? team1.name : team2.name } Batting`
}

let updateScore = () =>{
    document.getElementById("team-1-score").textContent=team1.score
    document.getElementById("team-2-score").textContent=team2.score
    updateRuns()
}

let updateTeamNames = () =>{
    document.getElementById("team-1-name").textContent=team1.name;
    document.getElementById("team-2-name").textContent=team2.name;
}

var buttonClick = () =>{
    var runs=score[Math.floor(Math.random()*score.length)];
    runs= runs === 5 ? "W" : runs;

    if(turn===1){
        team1.runs.push(runs)
        team1.score=calculateScore(team1.runs)
    }
    else{
        team2.runs.push(runs)
        team2.score=calculateScore(team2.runs)
    }
    updateButtonText()
    updateScore()
}

var calculateScore= (runs) =>{
    return runs.map(num => {
        return num=="W" ? 0: num
    }).reduce((totla,num)=>totla+num)
}

var updateRuns=()=>{
    var teamOne=document.getElementById("team-1-round-runs").children
    var teamTwo=document.getElementById("team-2-round-runs").children

    team1.runs.forEach((runs,index)=>{
        teamOne[index].textContent=runs
    })


    team2.runs.forEach((runs,index)=>{
        teamTwo[index].textContent=runs
    })
}
