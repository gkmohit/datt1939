var scoreBoard = document.getElementById("scoreBoard");
var potatoe = document.getElementById("potatoe");
var finalResult = document.getElementById("finalResult");
var score = 0;



var potatoeClick = function(){
	score++;
	scoreBoard.innerHTML = score;
	if(score == 10){
		finalResult.innerHTML = "Keep clicking to unlock your prize.";
	}
	if(score == 30){
		finalResult.innerHTML = "Almost there. Keep it going.";
	}
	if(score == 50){
		finalResult.innerHTML = "You have come this far, might as well finish the whole game.";
	}
	if(score == 70){
		finalResult.innerHTML = "Wonderfull 30 more to go.";
	}
	if(score >= 100){
		finalResult.innerHTML = "CONGRAGULATIONS, YOU CAN CLICK WELL. THAT IS INTERESTING !!"
	}

}

potatoe.onclick = potatoeClick;