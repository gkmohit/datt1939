//Function to change the value domElement with the passes string
function changeInnerHTML(domElement, innerHtmlString ) {
	domElement.innerHTML = innerHtmlString;
};

//Variable for person-status class on the screen.
var personStatus = document.getElementsByClassName("person-status");
var personName = document.getElementsByClassName("person-name");

function rerunFunction() {
	for(var i = 0; i < personStatus.length ; i++) {
		//random number from 0 to length of the statusArray
		var randomNum = randInt(0, statusArray.length);
		// alert(personStatus[i].innerHTML);
		changeInnerHTML(personStatus[i], statusArray[randomNum]);
	}
}



rerunFunction();
window.setInterval(function(){
  rerunFunction();
}, 15000);