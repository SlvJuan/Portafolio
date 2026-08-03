const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const botones = document.querySelector(".btn");
const imagenes = document.querySelector(".images");

let imgsMuestra = ["001", "002", "003", "004"];

let contador = 0;

btnLeft.addEventListener("click", izquierda);
btnRight.addEventListener("click", derecha);

function derecha() {
    contador++;
    if (contador > imgsMuestra.length - 1) {
        contador = 0;
    }
    imagenes.style.background = `url("imgs/${imgsMuestra[contador]}.png")`;
}

function izquierda() {
    contador--;
    if (contador < 0) {
        contador = imgsMuestra.length - 1;
    }
    imagenes.style.background = `url("imgs/${imgsMuestra[contador]}.png")`;
} 