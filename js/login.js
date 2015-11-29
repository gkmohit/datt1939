//Function to change the value domElement with the passes string
function changeInnerHTML(domElement, innerHtmlString ) {
	domElement.innerHTML = innerHtmlString;
};

//function to change the source of profile picture image.
function changeImgSource(domElement, source){
	domElement.src = source;
}

//Variable for person-status class on the screen.
var personStatus = document.getElementsByClassName("person-status");
var personName = document.getElementsByClassName("person-name");
var profilePicture = document.getElementsByClassName("profile-picture");


function rerunFunction() {
	for(var i = 0; i < personStatus.length ; i++) {
		//random number from 0 to length of the statusArray
		var randomStatusNum = randInt(0, statusArray.length );
		var randomUserNum = randInt(0, statusArray.length -1);
		// alert(personStatus[i].innerHTML);
		changeInnerHTML(personStatus[i], statusArray[randomStatusNum]);
		changeInnerHTML(personName[i], usersArray[randomUserNum].fullName);
		changeImgSource(profilePicture[i], usersArray[randomUserNum].profilePic)
	}
}



rerunFunction();
window.setInterval(function(){
  rerunFunction();
}, 15000);