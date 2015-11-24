var counter = 0;
var condition = false;
function validateLogin(){
	var userName = document.getElementById("userNameInput");
	var password = document.getElementById("password");
	var wrongLoginText = document.getElementById("wrongLoginText");
	var PASSWORD_REG = /([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])/;
    var USERNAME_REG = /^[a-z][a-z0-9]+/;
    var newUrl = ("./pages/login.html");

	//Chceking if the username and password are correct.
    if( userName.value.match(USERNAME_REG) && password.value.match(PASSWORD_REG)){
    	wrongLoginText.style.visibility = "hidden";
    	alert("PASS");
    	condition = true;
    	counter = 0;
    	document.location.href = newUrl;
    }
    else{
	    	if(counter == 0){
	    	wrongLoginText.innerHTML = "Its your first time, so its okay . . . Use the login from the labs.";
			wrongLoginText.style.visibility = "visible";
			counter++;
		}
		else if(counter == 1){
			wrongLoginText.innerHTML = "I can't be more clear. .Use your York U user name and well the lab password";
			wrongLoginText.style.visibility = "visible";	
			counter++;
		}
		else if(counter == 2){
			wrongLoginText.innerHTML = "I can't believe it man . . I thought you were better. York U user name and student number";
			wrongLoginText.style.visibility = "visible";	
			counter++;
		}
		else if(counter > 2){
			wrongLoginText.innerHTML = "THIS IS NOT FOR PEOPLE LIKE YOU. I WOULD LIKE IT IF YOU DONT USE IT. BYE BYE.";
			wrongLoginText.style.visibility = "visible";	
			counter++;
		}
    }
    console.log(counter);
	
}