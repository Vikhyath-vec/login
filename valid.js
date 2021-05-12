	//Validtion Code For Inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (username.value.length < 1) {
		username.style.border = "1px solid red";
		username_error.style.display = "block";
		username.focus();
		return false;
	}
	
	if (password.value.length < 1) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function username_Verify(){
	if (username.value.length >= 0) {
		username.style.border = "none";
		username.style.borderBottom = "1px solid goldenrod";
		username_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 0) {
		password.style.border = "none";
		password.style.borderBottom = "1px solid goldenrod";
		pass_error.style.display = "none";
		return true;
	}
}

function myFunction(){
	var x = document.getElementById("myInput");
	var y = document.getElementById("hide1");
	var z = document.getElementById("hide2");

	if(x.type === 'password'){
		x.type = "text";
		y.style.display = "block";
		z.style.display = "none";
	}
	else{
		x.type = "password";
		y.style.display = "none";
		z.style.display = "block";
	}
}

