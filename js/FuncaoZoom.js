var tam = 1rem; 

function mudaFonte(tipo,elemento){ 
	if (tipo=="mais") { 
		if(tam<20) tam+=1; 
		createCookie("fonte",tam,365);
	} else if(tipo=="menos"){ 
		if(tam>10) tam-=1; 
		createCookie("fonte",tam,365); 
	} else{
		tam = 16; 
		createCookie("fonte",tam,365); 
	}
	document.getElementById("texto").style.fontSize = tam+"px"; 
}

function createCookie(name,value,days) { 
	if (days) { 
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString(); 
	} else var expires = ""; 
	document.cookie = name+"="+value+expires+"; path=/"; 
} 
function readCookie(name) { 
	var nameEQ = name + "="; 
	var ca = document.cookie.split(";"); 
	for(var i=0;i < ca.length;i++) 
	{ 
		var c = ca[i]; 
		while (c.charAt(0)==" ") c = c.substring(1,c.length); 
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); 
	} 
	return null; 
}
