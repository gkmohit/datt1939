function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var dice = new Dice(6);
var dice10 = new Dice(10);


function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};