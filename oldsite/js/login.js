// login support functions


  
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