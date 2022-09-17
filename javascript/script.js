function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "piya"&& pass=="18-09-2007")
  	{
  	    window.location.href="start.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="index.html";
  	}	
};