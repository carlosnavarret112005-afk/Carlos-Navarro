let tablero = document.querySelector(".tablero");
let celdas = document.querySelectorAll(".celda");

let limpiar = document.querySelector(".boton-limpiar");
let colores = ['red','green', 'blue', 'yellow'];
let indice = 2;
let colorActual = colores[indice];

let arriba = document.querySelector(".arriba");
let izquierda = document.querySelector(".izquierda");
let abajo = document.querySelector(".abajo");
let derecha = document.querySelector(".derecha");

let posInicio = Math.floor(Math.random() * 64);
celdas[posInicio].classList.add("activa");

//apartado A
function pintar(event){
    if (event.target.classList.contains("celda")){
        event.target.style.backgroundColor = colorActual;
    }
}

function limpiarTablero(){
    for(let i = 0 ; i < celdas.length; i++){
        celdas[i].style.backgroundColor = "";
    }
}

tablero.addEventListener("click", pintar);
limpiar.addEventListener("click", limpiarTablero);

//apartado b
function cambiarColor(event){
    event.preventDefault();
    indice++;

    if (indice == colores.length){
        indice = 0;
    }

    colorActual = colores[indice];
}

tablero.addEventListener("contextmenu", cambiarColor);

// APARTADO C
// Mover la celda activa

function moverCelda(direccion) {
  let fila = Math.floor(posicionActual / 8);
  let columna = posicionActual % 8;

  // Quitamos la clase activa de la posición anterior
  celdas[posicionActual].classList.remove("activa");

  if (direccion === "arriba" && fila > 0) {
    posicionActual -= 8;
  }

  if (direccion === "abajo" && fila < 7) {
    posicionActual += 8;
  }

  if (direccion === "izquierda" && columna > 0) {
    posicionActual--;
  }

  if (direccion === "derecha" && columna < 7) {
    posicionActual++;
  }

  // Añadimos la clase activa a la nueva posición
  celdas[posicionActual].classList.add("activa");
}

botonArriba.addEventListener("click", function() {
  moverCelda("arriba");
});

botonAbajo.addEventListener("click", function() {
  moverCelda("abajo");
});

botonIzquierda.addEventListener("click", function() {
  moverCelda("izquierda");
});

botonDerecha.addEventListener("click", function() {
  moverCelda("derecha");
});

// APARTADO D
// Controlar el movimiento mediante el teclado

function moverTeclado(event) {
  let tecla = event.key.toLowerCase();

  if (tecla === "w") {
    moverCelda("arriba");
  }

  if (tecla === "s") {
    moverCelda("abajo");
  }

  if (tecla === "a") {
    moverCelda("izquierda");
  }

  if (tecla === "d") {
    moverCelda("derecha");
  }
}
