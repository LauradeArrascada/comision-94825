let nombre = prompt ('Ingrese nombre');;
let apellido = prompt ('Ingrese apellido');
let nac = prompt ('Ingrese año de nacimiento');
const DNI = prompt ('Ingrese DNI');
let curso = "JavaScript";

let edad = 2026 - parseInt(nac);

let mensaje = "El alumno " + nombre + ' ' + apellido + ' ' +  "edad: " + ' ' + "DNI: " + DNI + ' ' + "se inscribio en el curso: " + curso;
console.log(mensaje);


