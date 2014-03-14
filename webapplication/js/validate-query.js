uprf = null;
	activeWin = 0;
	
	function popLoginUp()
	{	if (uprf==null)
			uprf=window.open('login.asp?afterlogin=1&SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
		else if (uprf.closed || activeWin!=1)
			uprf=window.open('login.asp?afterlogin=1&SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
		uprf.focus();
		activeWin=1;
	}
	
	function popProfileUp()
	{	if (uprf==null)
			uprf=window.open('userProfile.asp?SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
		else if (uprf.closed || activeWin!=2)
			uprf=window.open('userProfile.asp?SessionID=574174891','userProfilePopUp','toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no');
		uprf.focus();
		activeWin=2;
	}

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24)
}
	
function validate() {

	//check a field to make sure departure is filled in
	if(document.queryform.departure.value == '') 
	{
		alert('Please fill out your departure city/airport.');
		document.queryform.departure.focus();
		return false;
	}

	//check a field to make sure destination is filled in
	if(document.queryform.destination.value == '')
	{
		alert('Please fill out your destination.');
		document.queryform.destination.focus();
		return false;
	}

	//check that the bookingdate > 14 days from today
	var DEPD=document.queryform.DEPD.value
	var DEPYM=document.queryform.DEPYM.value

	var depart_date=new Date( DEPYM + '/' + DEPD )
	var today=new Date()

	var dummy
	dummy = daydiff(today, depart_date)
		
	if(dummy <= 14)
	{
		alert('The bookingdate must be 14 days in the future');
		return false;
	}
	
	if(dummy > 330)
	{
		alert('The departing date must be at most 330 days in the future');
		return false;
	}
	// check of het om een enkele reis gaat, zo ja check geen returndate	
	
	var radios = document.getElementsByName('RET');
	var RET_YES = radios[0]
		
	if (RET_YES.checked == true)
		{
	//check that the returndate niet eerder dan vandaag is
		
		var RETD=document.queryform.RETD.value
		var RETYM=document.queryform.RETYM.value
		
		var return_date=new Date( RETYM + '/' + RETD )
		
		if( daydiff(depart_date, return_date) < 0)
		{
			alert('Date of returnflight is incorrect!')
			return false;
		}
		
		if( daydiff(today, return_date) > 330)
		{
			alert('The return date must be at most 330 days in the future');
			return false;
		}
	}
}
