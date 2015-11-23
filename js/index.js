function validateLogin(){
	var userName = document.getElementById("userNameInput").value;
	var password = document.getElementById("password").value;
	var wrongLoginText = document.getElementById("wrongLoginText");

	wrongLoginText.innerHTML = "Its your first time, so its okay . . . Use the login from the labs.";
	wrongLoginText.style.visibility = "visible";
	
	console.log(userName);
	console.log(password);
}