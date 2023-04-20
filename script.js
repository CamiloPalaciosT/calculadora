const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

document.addEventListener('keydown', function(event) {
    const teclaPresionada = event.key;
  
    // verifica si la tecla presionada es una tecla numérica o de operación
    if (/^[0-9+\-*/.%]$/.test(teclaPresionada)) {
        if (pantalla.textContent.length >= 15) {
            return;
          }
      if (pantalla.textContent === "0" || pantalla.textContent === "Error!") { 
        pantalla.textContent = teclaPresionada;
      } else {
        pantalla.textContent += teclaPresionada;
      }
    }
  });
  

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log("Botón presionado: ", boton.textContent);
        const botonApretado = boton.textContent;


        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent ="0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if (boton.id === "igual") {
            try{
            pantalla.textContent = eval(pantalla.textContent);
            pantalla.textContent = pantalla.textContent.slice(0, 15);
            } catch {
                pantalla.textContent = "Error!"
            }
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") { 
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
            pantalla.textContent = pantalla.textContent.slice(0, 15);
        }
    })
})
