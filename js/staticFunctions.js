//Function to return a random integer withing the given limit. Taken from Joe's code.
function randInt(low,high) {
	return Math.floor(Math.random()*(high-low+1)+low);
}

//Function to change the value domElement with the passes string
function changeInnerHTML(domElement, innerHtmlString ) {
	domElement.innerHTML = innerHtmlString;
};

//function to change the source of profile picture image.
function changeImgSource(domElement, source){
	domElement.src = source;
}

// function Person(fullName profilePic, bio, species){
// 	this.fullName = fullName;
// 	this.profilePic = profilePic;
// 	this.bio = bio;
// 	this.species = species;
// }

//Returns the value from a Key, value pair for the given key
var getProperty = function (propertyName, keyValArray) {
    return keyValArray[propertyName];
};

//My constructor for the person Class.
function Person(fullName, profilePic, bio, species, linkText){
	this.fullName = fullName;
	this.profilePic = profilePic;
	this.bio = bio;
	this.species = species;
	this.linkText = linkText;
};

// <div class="container trending-news-item">
//     <img class="placeholder-img trending-news-img" src="../img/placeholder.png">
//     <div class="news-update-div">
//         <h4 class="trending-news-title"><a href="#">TRENDING TILE GOES HERE</a></h4>
//         <p class="trending-news-body-short">With some words here.</p>
//     </div>
// </div>
//My constructor for the article class
function NewsItem(title, shortBody, trendingImage, linkText){
	this.title = title;
	this.shortBody = shortBody;
	this.trendingImage = trendingImage;
	this.linkText = linkText;
};


function setBackground(){
    var randNum = randInt(0, colorWheel.length - 1);
    var color = colorWheel[randNum];
    document.body.style.backgroundColor = color;
    
}