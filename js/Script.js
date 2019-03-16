// JavaScript Document
		
	// detect enter keypress
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      validate();
    }
});
// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see 
//the valid usernames/passwords and the redirect url simply with View Source.  
// And the user can obtain another three tries simply by refreshing the page.  
//So do not use for anything serious!

var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["flyingnerd123@gmail.com", "etdood@gmail.com", "gabrieljudewheeler@gmail.com"];  // as many as you like - no comma after final entry
var pwArray = ["joseph", "ethan", "gabriel"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
//alert ("Login was successful");
window.location = "teampage.html";
	document.getElementById("error-text").innerHTML = "";
return false;
}
else {
document.getElementById("error-text").innerHTML = "Incorrect Username or Password";
return false;
}

}
