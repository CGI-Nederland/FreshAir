// login support functions


uprf = null;
activeWin = 0;

function popLoginUp()
{ 
	if (uprf==null)
  		uprf=window.open('login.asp?afterlogin=1&SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
	else if (uprf.closed || activeWin!=1)
  		uprf=window.open('login.asp?afterlogin=1&SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');

	uprf.focus();
	activeWin=1;
}

function popProfileUp()
{ 
	if (uprf==null)
  		uprf=window.open('userProfile.asp?SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
	else if (uprf.closed || activeWin!=2)
  		uprf=window.open('userProfile.asp?SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');

	uprf.focus();
	activeWin=2;
}
  
function validate() {

	//check a field to make sure username is filled in
	if(document.logonform.username.value == '') 
	{
		alert('Please fill out your Fresh & Honest Club number.');
		return false;
	}
	//help
	if(document.logonform.username.value == 'help') 
	{
		alert('UID= 123.456.789.0 and password = abcd');
		return false;
	}


	//check a field to make sure password is filled in
	if(document.logonform.password.value == '')
	{
		alert('Please fill out your password.');
		document.logonform.username.focus();
		return false;
	}
	
	//check a field to make sure password is filled in
	if(document.logonform.password.value == 'abcd' && document.logonform.username.value == '123.456.789.0')
	{
		return true;
	}
	else
	{
		alert('Invalid user-id or password.');
		document.logonform.username.focus();
		return false;
	}
}