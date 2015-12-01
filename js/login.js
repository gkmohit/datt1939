
//Variable for person-status class on the screen.
var personStatus = document.getElementsByClassName("person-status");
var personName = document.getElementsByClassName("person-name");
var profilePicture = document.getElementsByClassName("profile-picture");


function rerunFunction() {
	for(var i = 0; i < personStatus.length ; i++) {
		//random number from 0 to length of the statusArray
		var randomStatusNum = randInt(0, statusArray.length );
		var randomUserNum = randInt(0, statusArray.length -1);

		//Calling the above functions to change person name, person status and profile picture.
		changeInnerHTML(personStatus[i], statusArray[randomStatusNum]);
		changeInnerHTML(personName[i], usersArray[randomUserNum].linkText);
		changeImgSource(profilePicture[i], usersArray[randomUserNum].profilePic)
	}
}


setBackground();
rerunFunction();
window.setInterval(function(){
  rerunFunction();
  setBackground();
}, 15000);