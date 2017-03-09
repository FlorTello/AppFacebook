var usuarios = [ {email : "flor@gmail.com", password : "12345678"}, 
				 {email : "naomi@gmail.com", password : "12345678" },
				 {email : "emma@gmail.com" , password : "12345678"}];
document.getElementById('login').addEventListener("click",function(event){
	 event.preventDefault();
	var textUsuario = document.getElementById('textUsuario').value;
	var clave = document.getElementById('textPassword').value;
	var error = document.getElementById('errorUsuario');
	var cont = 0;
	if(textUsuario == ""){
		document.getElementById('errorUsuario').innerHTML = "El campo de usuario no puede estar en blanco";
	}
	else if(textPassword == ""){
		document.getElementById('errorPassowrd').innerHTML = "El campo de usuario no puede estar en blanco";	
	}
	else{
		 usuarios.forEach((e) => e.email == textUsuario  && e.password == clave ? cont ++ :cont);
		 if(cont == 1){
		 	window.location = "about:_blank";
	}
	}
});