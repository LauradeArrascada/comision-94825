let edad = Number(prompt('Ingrese su edad'));

function verificarEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
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
            "Campo VIP"
        ];

        // Agregamos al principio
        entradas.unshift("Platea Alta");

        // Agregamos al final
        entradas.push("Entrada con Cena");

        // Eliminamos la última entrada
        entradas.pop();

        // Modificamos Campo VIP
        entradas[4] = "Campo Preferencial";

        console.log("Lista definitiva:", entradas);

        // Mostramos las ubicaciones

        console.log("Seleccione ubicación:");

        for (let entrada of entradas) {
            console.log(entrada);
        }

        // Elegimos ubicación

        let ubicacionElegida = prompt("¿Qué ubicación querés elegir?");

        // Validamos la ubicación

        if (entradas.includes(ubicacionElegida)) {
            console.log("Ubicación válida");

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
