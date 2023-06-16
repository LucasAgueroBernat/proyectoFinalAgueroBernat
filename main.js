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
  const isDarkSide = localStorage.getItem("darkSide") === "true";
  if (isDarkSide) {
    activateDarkSide();
  } else {
    activateLightSide();
  } 

// Función para guardar los datos del usuario en localStorage
function saveData() {
  let nombreDelUsuario = document.getElementById("nombre").value;
  let apellidoDelUsuario = document.getElementById("apellido").value;
  
  // Crear un objeto JSON con los datos del usuario
  let usuario = {
    nombre: nombreDelUsuario,
    apellido: apellidoDelUsuario,
  };
  
  // Convertir el objeto JSON a una cadena de texto
  let usuarioData = JSON.stringify(usuario);
  
  // Guardar los datos en localStorage
  localStorage.setItem("usuarioData", usuarioData);
  
}



// Asociar los eventos a los elementos HTML
document.getElementById("guardar").addEventListener("click", saveData);

