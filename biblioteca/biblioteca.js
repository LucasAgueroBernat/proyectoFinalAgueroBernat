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
	const personajeElegidoPorUsuario = input.value.toLowerCase();
  
	try {
	  const response = await fetch("./data.json");
	  const data = await response.json();
	  const resultado = data.find(item => item.nombre == personajeElegidoPorUsuario);

  
	  if (resultado) {
		const contenedor = document.getElementById("resultados"); // ID del contenedor en el HTML
  
		data.forEach(item => {
		  const li = document.createElement("li");
		  li.innerHTML = `
			<h2>${item.nombre}</h2>
			<p>${item.planetaNatal}</p>
			<p>${item.edad}</p>
			<p>${item.hijos}</p>
			<p>${item.padres}</p>
			<p>${item.afiliacion}</p>
			<p>${item.maestros}</p>
			<p>${item.aprendices}</p>
			<p>${item.muerte}</p>
		  `;
		  contenedor.appendChild(li); // Agregar el elemento li al contenedor
		});
  
		console.log(resultado);
	  } else {
		console.log("dato no encontrado");
	  }
	} catch (error) {
	  console.log("error al cargar los datos");
	}
  }
  document.addEventListener("DOMContentLoaded", function() {
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", async function(e) {
	  e.preventDefault();
	  await buscarPersonaje();
	});
  });
  
  
  