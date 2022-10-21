// Practica 1- Calculadora
function calcular() {
    let numero1         = parseInt(document.getElementById("num1").value);
    let numero2         = parseInt(document.getElementById("num2").value);
    let operacion       = document.getElementById("operacion").value;
    let lbl_resultado   = document.getElementById("lbl_resultado");
    

    let resultado = 0;

    if (operacion == "suma") {
        resultado = numero1 + numero2;

    } else if (operacion == "resta"){
        resultado = numero1 - numero2;

    } else if (operacion == "multiplicacion"){
        resultado = numero1 * numero2;

    } else {
        resultado = numero1 / numero2;
    }

    lbl_resultado.value = resultado;
}

// Practica 2- Imagenes
function cambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("img_1").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) {
        imagen.src = "./IMG/cr7.jpg";
    } else if (num_imagen == 2) {
        imagen.src = "./IMG/benzema.jpg";
    } else if (num_imagen == 3) {
        imagen.src = "./IMG/mbappe.jpg";
    } else if (num_imagen == 4) {
        imagen.src = "./IMG/valverde.jpg";
    } else {
        imagen.src = "./IMG/ney.jpg";
    }
}

// Practica 3- Tabla
function calcularTabla() {
    let numero       = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("lista_tabla");

    lista_tabla.innerHTML = "";

    for (let index = 1; index <= 10; index++) {
        lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
    }
}