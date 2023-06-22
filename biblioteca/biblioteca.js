// Función para aplicar los estilos del lado oscuro
function activateDarkSide() {
	// Cambia los estilos del body y otros elementos a los estilos del lado oscuro
	document.body.style.backgroundColor = "#0a0a0a";
	document.body.style.color = "#ff0000";
  }
  
  // Función para aplicar los estilos del lado de la fuerza
  function activateLightSide() {
	// Restaura los estilos del body y otros elementos al lado de la fuerza
	document.body.style.backgroundColor = "#00008b";
	document.body.style.color = "#fff";
  }
  
  // Función para cambiar entre el lado oscuro y el lado de la fuerza
  function cambiarDarkSide() {
	// Verifica si el modo oscuro está activado o no
	const isDarkSide = localStorage.getItem("darkSide") === "true";
  
	// Si el lado oscuro está activado, desactívalo; caso contrario, actívalo
	if (isDarkSide) {
	  localStorage.setItem("darkSide", "false");
	  activateLightSide();
	} else {
	  localStorage.setItem("darkSide", "true");
	  activateDarkSide();
	}
  }
  
  // Evento de click para cambiar entre el modo oscuro y el modo claro cuando se hace clic en el botón
  document.getElementById("cambiar-dark-side").addEventListener("click", cambiarDarkSide);
  
  // Verifica la preferencia del usuario al cargar la página y aplica los estilos correspondientes
  window.addEventListener("load", function () {
	const isDarkSide = localStorage.getItem("darkSide") === "true";
	if (isDarkSide) {
	  activateDarkSide();
	} else {
	  activateLightSide();
	}
  });
  
  window.addEventListener("load", function () {
	const usuarioData = localStorage.getItem("usuarioData");
  
	if (usuarioData) {
	  // Convertir la cadena de texto JSON a un objeto JavaScript
	  const usuario = JSON.parse(usuarioData);
	  // Asignar el texto de bienvenida al elemento con el id "bienvenida"
	  document.getElementById("bienvenida").innerText = "¡Bienvenido/a " + usuario.nombre + " " + usuario.apellido + "!";
	}
  });
  

  
  
  
  // Función de despedida
  function despedida(nombre) {
	let mensaje = `Gracias ${nombre} por elegirnos para seguir aprendiendo sobre Star Wars.`;
	Swal.fire(mensaje);
  }
  
  // Obtenemos el nombre del usuario desde localStorage y llamamos a la función despedida
  const usuarioData = localStorage.getItem("usuarioData");
  if (usuarioData) {
	const usuario = JSON.parse(usuarioData);
	despedida(usuario.nombre);
  }

  async function buscarPersonaje() {
	const input = document.getElementById("personajeInput");
	const personajeElegidoPorUsuario = input.value//.toLowerCase();
  
	try {
		const response = await fetch("./data.json");
		const data = await response.json();
		const resultado = data.find(item => item.nombre == personajeElegidoPorUsuario);
  
	
		if (resultado) {
		  const contenedor = document.getElementById("resultados"); // ID del contenedor en el HTML
		  const li = document.createElement("li");
			li.innerHTML = `
			  <h2>Nombre: ${resultado.nombre}</h2>
			  <p>Planeta Natal: ${resultado.planetaNatal}</p>
			  <p>Edad: ${resultado.edad}</p>
			  <p>Hijos${resultado.hijos}</p>
			  <p>Padres: ${resultado.padres}</p>
			  <p>Afiliacion: ${resultado.afiliacion}</p>
			  <p>Maestros: ${resultado.maestros}</p>
			  <p>Aprendices: ${resultado.aprendices}</p>
			  <p>Muerte: ${resultado.muerte}</p>
			  <img src="${resultado.imagen}" />
			`;
			contenedor.appendChild(li); // Agregar el elemento li al contenedor
		  }else{
			console.log("dato no encontrado");
		  }
	} catch (error) {
		console.log("no se pudo obtener la informacion");
	}}
  
  document.addEventListener("DOMContentLoaded", function() {
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", async function(e) {
	  e.preventDefault();
	  await buscarPersonaje();
	});
  });