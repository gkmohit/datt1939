
//Variable for person-status class on the screen.
var personStatus = document.getElementsByClassName("person-status");
var personName = document.getElementsByClassName("person-name");
var profilePicture = document.getElementsByClassName("profile-picture");

//Variable for trending-news-item
var trendingNewsImg = document.getElementsByClassName("trending-news-img");
var trendingNewsTitle = document.getElementsByClassName("trending-news-title");
var trendingNewsBodyShort = document.getElementsByClassName("trending-news-body-short");



// function NewsItem(title, shortBody, trendingImage, linkText){
// 	this.title = title;
// 	this.shortBody = shortBody;
// 	this.trendingImage = trendingImage;
// 	this.linkText = linkText;
// };

function rerunFunction() {
	for(var i = 0; i < personStatus.length ; i++) {
		//random number from 0 to length of the statusArray
		var randomStatusNum = randInt(0, statusArray.length );
		var randomUserNum = randInt(0, usersArray.length -1);

		//Calling the above functions to change person name, person status and profile picture.
		changeInnerHTML(personStatus[i], statusArray[randomStatusNum]);
		changeInnerHTML(personName[i], usersArray[randomUserNum].linkText);
		changeImgSource(profilePicture[i], usersArray[randomUserNum].profilePic);
	}

	for( var j = 0; j < trendingNewsTitle.length; j++ ){
		//random number from 0 to length or article array
		var randomNewsNum = randInt(0, articleArray.length - 1);
		changeInnerHTML(trendingNewsTitle[j], articleArray[randomNewsNum].linkText);
		changeInnerHTML(trendingNewsBodyShort[j], articleArray[randomNewsNum].shortBody);
		changeImgSource(trendingNewsImg[j], articleArray[randomNewsNum].trendingImage);
	}
}

arrayPush();
setBackground();
rerunFunction();
window.setInterval(function(){
  rerunFunction();
  setBackground();
}, 35000);