
let edad = Number(prompt('Ingrese su edad'));

function verificarEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

// Función para mostrar las entradas
function mostrarEntradas(entradas) {
    for (let entrada of entradas) {
        console.log("Ubicación: " + entrada);
    }
}

const puedeComprar = (resultado) => {
    if (resultado === true) {
        console.log("Puede comprar entradas");

        // ARRAY DE ENTRADAS
        let entradas = [
            "Platea Media",
            "Platea Baja",
            "Campo",
            "Campo VIP",
            "Entrada General"
        ];

        // Agregamos al principio
        entradas.unshift("Platea Alta");

        // Agregamos al final
        entradas.push("Entrada con Cena");

        // Eliminamos la última entrada
        let eliminado = entradas.pop();
        console.log("Se ha eliminado el elemento: " + eliminado);

        // Modificamos Campo VIP con splice
        entradas.splice(4, 1, "Campo Preferencial");

        console.log("Lista definitiva:", entradas);

        // Mostramos las ubicaciones
        console.log("Seleccione ubicación:");
        mostrarEntradas(entradas);

        // Elegimos ubicación
        let ubicacionElegida = prompt("¿Qué ubicación querés elegir?");

        // Validamos la ubicación
        if (entradas.includes(ubicacionElegida)) {
            console.log("Ubicación válida");

            let posicion = entradas.indexOf(ubicacionElegida);
            console.log("La ubicación está en la posición: " + posicion);

            let cantidadElegida = Number(prompt("¿Cuántas entradas querés de esta ubicación?"));

            console.log("Elegiste " + cantidadElegida + " entradas de " + ubicacionElegida);

        } else {
            console.log("La ubicación no existe");
        }

            } else {
            console.log("No puede comprar entradas");
        }
};

if (isNaN(edad)) {
    alert("Ingresá una edad válida");
} else {
    let resultado = verificarEdad(edad);
    puedeComprar(resultado);
}