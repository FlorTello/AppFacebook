/*var usuarios = [ {email : "flor@gmail.com", password : "12345678" , post : []}, 
                 {email : "naomi@gmail.com", password : "12345678" , post : []},
                 {email : "emma@gmail.com" , password : "12345678" , post : []}];
var usuarios = [ {email : "flor@gmail.com" , password : "12345678" , post : [{ contenido : "" , estado : "publico" }] }, 
                 {email : "naomi@gmail.com", password : "12345678" , post : [{ contenido : "" , estado : "publico" }] },
                 {email : "emma@gmail.com" , password : "12345678" , post : [{ contenido : "" , estado : "publico" }] }];*/

function createPost(contenido) {
  var post = document.createElement('div');
  var texto = document.createElement('textarea');
  texto.innerHTML = contenido;
  texto.disabled = "true";
  var eliminar = document.createElement('a');
  var editar = document.createElement('a');
  eliminar.title = "eliminar";
  eliminar.href = "#"
  eliminar.innerHTML = "Eliminar";
  editar.title = "editar";
  editar.setAttribute("href","#");
  editar.innerHTML = "Editar";
  editar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
    texto.removeAttribute("disabled");
    texto.focus();
  });
  eliminar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
    post.removeChild(texto);
  });
  post.appendChild(texto);
  post.appendChild(editar);
  post.appendChild(eliminar);
  return post;
}

document.getElementById('publicar').addEventListener("click",function(event){
	event.preventDefault();
  var indice = sessionStorage.getItem("email");
  console.log(indice);
	var resultado = document.getElementById('resultado');
  var contenido = document.getElementById('post').value;
  if(contenido == "" ){
    alert("Ingrese contenido del Post");
  }else{
    var estado = document.getElementById('private').value;
    var po = {
      content: contenido,
      visible: estado 
    } 
    usuarios[parseInt(indice)].post.push(po);
    resultado.appendChild(createPost(contenido));
    document.getElementById('post').value = "";
  }	
});
