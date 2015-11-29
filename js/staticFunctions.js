function randInt(low,high) {
	return Math.floor(Math.random()*(high-low+1)+low);
}

// function Person(fullName profilePic, bio, species){
// 	this.fullName = fullName;
// 	this.profilePic = profilePic;
// 	this.bio = bio;
// 	this.species = species;
// }
var getProperty = function (propertyName, keyValArray) {
    return keyValArray[propertyName];
};

function Person(fullName, profilePic, bio, species){
	this.fullName = fullName;
	this.profilePic = profilePic;
	this.bio = bio;
	this.species = species;
};