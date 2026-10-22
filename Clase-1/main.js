let edad = Number(prompt('Ingrese su edad'));

function verificarEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let resultado = verificarEdad(edad);

function elegirEntrada(tipo) {
    if (tipo === "vip") {
        console.log("Elegiste una entrada VIP");
    } else if (tipo === "común") {
        console.log("Elegiste una entrada común");
    } else {
        console.log("Tipo de entrada no válido");
    }
}

const puedeComprar = (resultado) => {
    if (resultado === true) {
        console.log("Puede comprar entradas");
        let tipo = prompt("Elegí una entrada: VIP o común");
        elegirEntrada(tipo);
        let cantidad = Number(prompt("¿Cuántas entradas querés comprar?"));
        for (let i = 1; i <= cantidad; i++) {
        console.log("Procesando entrada número " + i);
    }
        } else {
        console.log("No puede comprar entradas");
    }
};

puedeComprar(resultado);




