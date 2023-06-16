// Función para aplicar los estilos del lado oscuro
function activateDarkSide() {
  // Cambia los estilos del body y otros elementos a los estilos del lado oscuro
  document.body.style.backgroundColor = "#0a0a0a";
  document.body.style.color = "#ff0000";
  document.getElementById("image").src = './imagenes/sith knigths.jpg'
}
// Función para aplicar los estilos del lado oscuro
function activateDarkSide() {
	// Cambia los estilos del body y otros elementos a los estilos del lado oscuro
	document.body.style.backgroundColor = "#0a0a0a";
	document.body.style.color = "#ff0000";
	document.getElementById("image").src = "./imagenes/sith knigths.jpg";
}

// Función para aplicar los estilos del lado de la fuerza
function activateLightSide() {
	// Restaura los estilos del body y otros elementos al lado de la fuerza
	document.body.style.backgroundColor = "#00008b";
	document.body.style.color = "#fff";
	document.getElementById("image").src = "./imagenes/jedi knights.jpg";
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
// // Evento de click para cambiar entre el modo oscuro y el modo claro cuando se hace clic en el botón
// document.getElementById("cambiar-dark-side").addEventListener("click", cambiarDarkSide);

// // Verifica la preferencia del usuario al cargar la página y aplica los estilos correspondientes
// const isDarkSide = localStorage.getItem("darkSide") === "true";
// if (isDarkSide) {
// 	activateDarkSide();
// } else {
// 	activateLightSide();
// }

window.addEventListener("load", function () {
	let usuarioData = localStorage.getItem("usuarioData");

	if (usuarioData) {
		// Convertir la cadena de texto JSON a un objeto JavaScript
		let usuario = JSON.parse(usuarioData);
		// Asignar el texto de bienvenida al elemento con el id "bienvenida"
		document.getElementById("bienvenida").innerText = "¡Bienvenido/a " + usuario.nombre + " " + usuario.apellido + "!";
	}
});

// Creamos un array de objetos de personajes
const misPersonajes = [
	{
		nombre: "Anakin Skywalker",
		planetaNatal: "Tatooine",
		especie: "humano",
		edad: "9 (ep.1) 19 (ep.2) 19-22 (clone wars) 22 (ep.3) 32 (obi-wan) 36-41 (rebels) 41(rogue one y ep.4) 44 (ep.5) 45 (ep.6)",
		hijos: ["Luke Skywalker", "Leia Organa"],
		padres: "Shmi Skywalker",
		afiliacion: [
			"Orden Jedi (Alto Consejo Jedi)",
			"República Galáctica (Legión 501)",
			"Sith",
			"Imperio Galáctico (Alto Mando Imperial y Escuadrón de la Muerte)",
		],
		maestros: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Darth Sidious", "Yoda"],
		aprendices: ["Ahsoka Tano", "Inquisición"],
		muerte: "4 DBY Estrella de la Muerte",
	},
	{
		nombre: "Obi-Wan Kenobi",
		planetaNatal: "Stewjon",
		especie: "Humano",
		edad: "25 (ep.1), 35 (ep.2), 35-38 (clone wars), 38 (ep.3), 48 (obi-wan kenobi), 56(rebels), 57 (ep.4)",
		afiliacion: ["Orden Jedi (Alto Consejo Jedi)", "República Galáctica (7mo Cuerpo Aéreo)", "Alianza para Restaurar la República"],
		maestros: ["Qui-Gon Jinn", "Yoda"],
		aprendices: ["Anakin Skywalker", "Luke Skywalker"],
		muerte: "0 ABY Estrella de la Muerte",
	},
	{
		nombre: "Darth Sidious",
		planetaNatal: "Naboo",
		especie: "Humano",
		edad: "52 (ep.1), 62 (ep.2), 62-65 (clone wars), 65 (ep.3 y the bad batch), 75 (Obi-Wan Kenobi), 79-84 (rebels), 87 (ep.5), 88 (ep.7), 119 (ep.9)",
		afiliacion: [
			"Familia Palpatine",
			"Sith",
			"Casa Real de Naboo",
			"Rep. Galáctica (Delegación de Naboo, Oficina de Canciller)",
			"Federación de Comercio",
			"Confederación de Sistemas Independientes",
			"Imperio Galáctico",
			"Sith Eterno",
			"Primera Orden",
			"Orden Final",
		],
		maestros: "Darth Plagueis",
		aprendices: ["Wilhuff Tarkin", "Darth Maul", "Darth Tyranus", "Gallius Rax", "Darth Vader", "Inquisición", "Snoke", "Kylo Ren"],
		muerte: "35 DBY Exegol",
	},
];
function mostrarInformacion(personaje) {
	const resultadoDiv = document.getElementById("resultado");
	if (personaje) {
		let mensaje = `
      Nombre: ${personaje.nombre}
      Planeta Natal: ${personaje.planetaNatal}
      Especie: ${personaje.especie}
      Edad: ${personaje.edad}
      Hijos: ${personaje.hijos.join(", ")}
      Padres: ${personaje.padres}
      Afiliación: ${personaje.afiliacion.join(", ")}
      Maestros: ${personaje.maestros.join(", ")}
      Aprendices: ${personaje.aprendices.join(", ")}
      Muerte: ${personaje.muerte}`;

		resultadoDiv.innerHTML = mensaje;
	} else {
		resultadoDiv.innerHTML = "No se encontró el personaje solicitado.";
	}
}

function buscarPersonaje(e) {
	e.preventDefault();
	const input = document.getElementById("personajeInput");
	const personajeElejidoPorUsuario = input.value;

	const personajeEncontrado = misPersonajes.find((item) => item.nombre.toLowerCase() === personajeElejidoPorUsuario.toLowerCase());
	mostrarInformacion(personajeEncontrado);
}

const formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", buscarPersonaje);

// Función de despedida
function despedida(nombre) {
	let mensaje = `Gracias ${nombre} por elegirnos para seguir aprendiendo sobre Star Wars.`;
	alert(mensaje);
}

// Obtenemos el nombre del usuario desde localStorage y llamamos a la función despedida
let usuarioData = localStorage.getItem("usuarioData");
if (usuarioData) {
	let usuario = JSON.parse(usuarioData);
	despedida(usuario.nombre);
}


