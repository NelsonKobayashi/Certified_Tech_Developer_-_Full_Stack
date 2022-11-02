document.addEventListener("onload", checkCookies() );

function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
	alert("Cookies são permitidos")
	}
else
	{
	alert("Cookies não são permitidos")
	}
}