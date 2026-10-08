//pre-entrega 1

//let nombre = prompt ('Ingrese nombre');;
//let apellido = prompt ('Ingrese apellido');
//let nac = prompt ('Ingrese año de nacimiento');
//const DNI = prompt ('Ingrese DNI');
//let curso = "JavaScript";
//let anioActual = 2026;
//let edad = anioActual - (Number(nac));

//alert('Se inscribio correctamente!');

//let mensaje = "El alumno " + nombre + ' ' + apellido + ' ' +  "edad: " + edad + ' ' + "DNI: " + DNI + ' ' + "se inscribio en el curso: " + curso;
//console.log(mensaje);

//pre entrega2

let contadorVIP = 0;

for (let i= 1; i <= 50; i++) {

    let entrada = prompt("¿Que entrada desea? vip o comun");
    console.log(entrada);

    if (entrada === 'vip' && contadorVIP < 20) {
        
            contadorVIP++
            console.log("Entrada VIP vendida");

        } else if (entrada === 'vip' && contadorVIP >= 20) {
            console.log("No quedan entradas VIP");
            
        } else if (entrada === 'comun') {
            console.log("Entrada comun vendida");

        } else {
            console.log("Opción no válida");
        }  
    }

console.log(contadorVIP);
