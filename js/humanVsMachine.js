// function Dice(sides) {
//   this.sides = sides;
// }

// Dice.prototype.roll = function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
// }

// var dice = new Dice(6);
// var dice10 = new Dice(10);


// function printNumber(number) {
//   var placeholder = document.getElementById("placeholder");
//   placeholder.innerHTML = number;
// }

var guessButton = document.getElementById("guessButton");
var userInput = document.getElementById("userGuess");
var hintButton = document.getElementById("hintButton");
var hints = document.getElementsByClassName("hints");
var hearts = document.getElementsByClassName("fa-heart");
var placeholder = document.getElementById("placeholder");
var counter = 0;
var randomNumber = randInt(0, 1000);
var lives = 2;

function reloadWindow(){
	window.setInterval(function(){
		setBackground();
		window.location.reload(1);
	}, 4000);
}

guessButton.onclick = function() {
	if( lives == 2){
		if (randomNumber == userInput.value ) {
			placeholder.innerHTML = "How could you ? Why would you save humanity? Any way, your guess was right. The number was " + randomNumber;
			reloadWindow();
		}
		else{
			// placeholder.innerHTML =
			hearts[lives].style.display = "none" ;			
			lives--;
		}
	}
	else if( lives == 1 ){
		if (randomNumber == userInput.value ) {
			placeholder.innerHTML = "Your guess was right. The number was " + randomNumber + ". But you won over the machines? Are you hoping for a better place with humans ?";
			reloadWindow();
		}
		else{
			hearts[lives].style.display = "none" ;
			lives--;
		}
	}
	else{

		if (randomNumber == userInput.value ) {
			placeholder.innerHTML = "How could you ? Why would you save humanity? Any way, your guess was right. The number was " + randomNumber;
		}
		else{
			hearts[lives].style.display = "none" ;
			placeholder.innerHTML = "It was about time the machines won. The world will be a better place now. Any way the number was " + randomNumber;
			reloadWindow();
			
		}
		
	}
	setBackground();
};

hintButton.onclick = function(){
	hints[0].style.display = "block";
	if(counter == 0){
		hints[0].innerHTML = "IT IS A NUMBER."
	}
	else if( counter == 1 ){
		hints[0].innerHTML = "The number is between 0 and " + randomNumber;	
	}
	else if( counter == 2 ){
		hints[0].innerHTML = "The number is between " + (randomNumber - 10) + " and " + randomNumber;
	}
	else {
		hints[0].innerHTML = "Sorry you have been to greedy now."
	}
	counter++;
};

setBackground();