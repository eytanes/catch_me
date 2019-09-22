var sec = 60;
var secDom = document.getElementById("time");
var gamestart = "";
var point = 0;
var pointDom = document.getElementById("score");
var missClick = 0;
var missClickDom = document.getElementById("missClick");
var level = 1;
var levelDom = document.getElementById("level");
var nextLevel = 10;
var nextLevelDom = document.getElementById("nextLevel");
var stopper = null;
var click = 0;
var movingDiv = document.getElementById("clicker");
var speedmoving = 300;
var speedrotate = 2000;
var rotation = 0;
var d = null;
//var highScoreTable =document.getElementById("highscore")
// var highScoreTable=null;
var toppage = document.getElementById("toppage");
//document.getElementsByClassName("highScore").innerHTML = JSON.parse(localStorage.getItem("highScoreTable"));
if(localStorage.highScore == null){
    var highScore = [
    {name:"meir" ,score:15 , date:18/09/2019},
    {name:"eytane" , score:10},
    {name:"gab", score:8},
    {name:"jeremy",score:5},
    {name:"ali", score:2},
    ];}


displayNewHightScoreTable();


function hoverTopPage(){
    if (gamestart == ""){
    toppage.innerHTML = "click to start";
    }else {
        toppage.innerHTML = "click to restart the game";
    }
    
}
function catchMeText(){
    toppage.innerHTML = "catch me if you can";
}
function start() {
    if (gamestart == "the game start chrono on"){
      var restart =  prompt("are you sure? your progression will be lost! if you want to restart press 1");
    if(restart ==1){
        clearInterval(stopper);
          clearInterval(d);
          movingDiv.style.top = 0 +"px";
          movingDiv.style.left = 0 +"px";
          movingDiv.style.transform = "rotate("+ 0 +"deg)" ;
    }}
    if (gamestart == "") {
        sec = 60; // donnee remise a jour pour nouvelle partie point niveau.... a 0
        secDom.innerHTML ="60"
        point =0;
        pointDom.innerHTML ="0"
        missClick = 0;
        missClickDom.innerHTML ="0"
        level = 1;
        levelDom.innerHTML = "1";
        nextLevel = 10;
        nextLevelDom.innerHTML="10";
        click = 0;
        speedmoving = 300;
        speedrotate = 2000;
        rotation = 0;
        gamestart = "the game started chrono on";
       stopper = setInterval(chrono, 1000);
       d = setInterval(rotating,10);
    }

    function chrono() {
        if (sec > 0) {
            sec--;
            if (sec < 10) {
                secDom.innerHTML = "0" + sec;
            } else {
                secDom.innerHTML = sec;

            }

        } else  {
            
            movingDiv.style.top = 0 +"px";
            movingDiv.style.left = 0 +"px";
            movingDiv.style.transform = "rotate("+ 0 +"deg)" ;
        
          if (point > highScore[4].score){  
              TableOfHightScore();
              displayNewHightScoreTable();
             }
          gamestart = "";
          clearInterval(stopper);
          clearInterval(d);
    }}
    }
    



function points() {
    if (gamestart == "the game started chrono on"){
    if (sec != 0) {
        click++;
        point += (level * 11);
        pointDom.innerHTML = point;
        missClick--;
        missClickDom.innerHTML = point;
        nextLevel = 10 - (click % 10);
        nextLevelDom.innerHTML = nextLevel;
       
        if (click % 10 == 0 && click != 0) {
            level++;
            levelDom.innerHTML = level;
            if (level == 5){
                alert("congratulation you win!!! press enter to continue to play and try to make the best score you can")
            }
            sec+=10;
            speedmoving -=50;
            speedrotate -=250;
              
        }

    }
}}
function wrongClick(){
    if (gamestart == "the game started chrono on" && sec != 0){
        point -= level;
        pointDom.innerHTML =point;
        missClick++ ;
        missClickDom.innerHTML = missClick;
    }
}
function escape(){
    if (gamestart == "the game started chrono on"){
    setTimeout(moving,speedmoving);
    

}}

function moving() {
    
    movingDiv.style.top = Math.random() * 435 + 20 + "px"; //aleatoire dans le carre en evitant que ca depasse a cause de la rotation
    movingDiv.style.left = Math.random() * 1030 + "px";
    
}
function rotating(){
    rotation += 3600/speedrotate;
    movingDiv.style.transform = "rotate(" + rotation +"deg)";
    

}

// var highScore = [
//     {name:"meir" ,score:15 },
//     {name:"eytane" , score:10},
//     {name:"gab", score:8},
//     {name:"jeremy",score:5},
//     {name:"ali", score:2},
//     ];


function TableOfHightScore(){

highScore.pop();

  var newHighScoreUser = prompt("Hight Score Congratulation!! Please enter your name");
  var date = new Date();
  var formats={weekday: "long", year:"2-digit",month:"2-digit",day:"numeric"};
  if (point>highScore[0].score){
   
        highScore.splice(0,0,{name:""+newHighScoreUser, score:point,
         highScoreDate:date.toLocaleDateString("fr",formats)});
        console.log(date.toLocaleDateString("fr",formats));
        

    }else if( point>highScore[1].score){
        highScore.splice(1,0,{name:""+newHighScoreUser, score:point ,highScoreDate:date.toLocaleDateString("fr",formats) });
    }else if(point>highScore[2].score){
        highScore.splice(2,0,{name:""+newHighScoreUser, score:point , highScoreDate:date.toLocaleDateString("fr",formats)});
    }else if(point>highScore[3].score){
        highScore.splice(3,0,{name:""+newHighScoreUser, score:point , highScoreDate:date.toLocaleDateString("fr",formats)});
    }else{
    highScore.push({name:""+newHighScoreUser, score:point , highScoreDate:date.toLocaleDateString("fr",formats)});
    }
 point = 0; //eviter que la fonction ne se relance
localStorage.setItem("highScore",JSON.stringify(highScore));   
}


function displayNewHightScoreTable(){

    if(localStorage.highScore != null ){
        highScore = JSON.parse(localStorage.getItem("highScore"));
    }

    highScoreTable ="<div>";
    for (let i = 0 ; i<5; i++){
        highScoreTable +=  "<div title='"+  highScore[i].highScoreDate +"'>" + highScore[i].name +':'+highScore[i].score +'point'+"<br/> </div>"

    }
    highScoreTable += "</div>";
   document.getElementsByClassName("highscore")[0].innerHTML = highScoreTable;
   localStorage.setItem("highScore",JSON.stringify(highScore));

   
}
    
