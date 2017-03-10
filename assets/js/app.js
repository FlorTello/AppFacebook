document.getElementById('login').addEventListener("click",function(event){
	event.preventDefault();
	var textUsuario = document.getElementById('textUsuario').value;
	var clave = document.getElementById('textPassword').value;
	var cont = 0;
	if(textUsuario == ""){
		document.getElementById('errorUsuario').innerHTML = "El campo de usuario no puede estar en blanco";
	}
	else if(clave == ""){
		document.getElementById('errorPassword').innerHTML = "El campo de password no puede estar en blanco";	
	}
	else{
		 usuarios.map((e,i) => e.email == textUsuario  && e.password == clave ? cont = i :cont);
		 console.log(cont);
		if(cont >= 0){
			 sessionStorage.setItem("email" , cont);
		 	window.location = "muro.html";
		}
		else{
			alert("Usuario O Password Invalido");
		}
	}
});

