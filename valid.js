	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 1) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	
	if (password.value.length < 1) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 0) {
		email.style.border = "none";
		email.style.borderBottom = "1px solid goldenrod";
		email_error.style.display = "none";
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

