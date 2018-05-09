function fonte(e) {

	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	
	if (e == 'a'){
		fonte++;
	} else if (e == 'b'){
		fonte--;
	} else if (e == 'c'){
		fonte = '';
	}

	elemento.css("fontSize", fonte);
	
}