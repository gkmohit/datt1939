var clickedTime;
var createdTime;
var reactionTime;
var count = 0;

//Nut button
var nut = document.getElementById("box");

function displayNone(idName) {
    document.getElementById(idName).style.display = "none";
};

function displayBlock(idName) {
    document.getElementById(idName).style.display = "block";
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for ( var i = 0; i < 6; i++){
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

function makeCircle() {
    document.getElementById("box").style.borderRadius = "100%";
};

function makeSquare() {
    document.getElementById("box").style.borderRadius = "0px";
};

function makeBox() {
    var randomSeconds = Math.random();
    randomSeconds = randomSeconds * 1000;
    //if (Math.random() > 0.5) {
    //    makeCircle();
    //}
    //else{
    //    makeSquare();
    //}
    var top = Math.random();
    top = top * 440;
    var left = Math.random();
    left = left * 1200;
    document.getElementById("box").style.top = top+"px";
    document.getElementById("box").style.left = left+"px";
    setTimeout(function(){
        createdTime = Date.now();
        document.getElementById("box").src = "../img/nut.png";
        displayBlock("box"); 
    }, randomSeconds);
    
};


document.getElementById("box").onclick = function (){
    clickedTime = Date.now();
    var delay = 2000;
    // setTimeout(function(){
    //     document.getElementById("box").style.display = 'none';
    // }, delay);   
    reactionTime = (clickedTime - createdTime) / 1000;
    displayBlock("reactionValue");
    displayBlock("stopPara");
    document.getElementById("reactionValue").innerHTML = "Your reaction is " + reactionTime + " seconds";
    document.getElementById("box").src = "../img/nut.png";
    count++;
    makeBox();
    setBackground();
}
setBackground();
makeBox();
document.getElementById("stopButton").onclick = function(){
    var string = "<br><h1>BUT YOU NEVER CRUSHED THE NUT . . . </h1><br><h1>SOOO YOU DID NOT WIN.</h1>" 
    document.getElementById("reactionValue").innerHTML = "You clicked on the nut " + count + " times." + string;
}