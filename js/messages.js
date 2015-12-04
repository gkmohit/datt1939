var profilePicture = document.getElementsByClassName("profile-picture");
var friendName = document.getElementsByClassName("friend-name");
var friendItem = document.getElementsByClassName("friend-item");
var messageItem = document.getElementsByClassName("message-item");
var messageText = document.getElementsByClassName("message-text");
var timeText = document.getElementsByClassName("time-text");


for(var i = 0; i < friendItem.length ; i++) {
	//random number from 0 to length of the statusArray
	var randomUserNum = randInt(0, usersArray.length -1);

	//Calling the above functions to change person name, person status and profile picture.
	changeInnerHTML(friendName[i], usersArray[randomUserNum].linkText);
	changeImgSource(profilePicture[i], usersArray[randomUserNum].profilePic);
}

for(var i = 0; i < messageText.length ; i++) {
	
	var d = new Date(); // for now
	// d.getHours(); // => 9
	// d.getMinutes(); // =>  30
	// d.getSeconds(); // => 51
	timeText[i].innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	//Calling the above functions to change person name, person status and profile picture.
	// changeInnerHTML(friendName[i], usersArray[randomUserNum].linkText);
	// changeImgSource(profilePicture[i], usersArray[randomUserNum].profilePic);
	// if( (i % 2) == 0){
	// 	messageText[i].style.textAlign = "left";
	// }
	// else{
	// 	messageText[i].style.textAlign = "right";	
	// }
	changeInnerHTML(messageText[i], sentenceCreater(20));
	

}
