//Function to return a random integer withing the given limit. Taken from Joe's code.
function randInt(low,high) {
	return Math.floor(Math.random()*(high-low+1)+low);
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