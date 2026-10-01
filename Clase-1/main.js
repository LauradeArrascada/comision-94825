let nombre = prompt ('Ingrese nombre');;
let apellido = prompt ('Ingrese apellido');
let nac = prompt ('Ingrese año de nacimiento');
const DNI = prompt ('Ingrese DNI');
let curso = "JavaScript";
let anioActual = 2026;
let edad = anioActual - (Number(nac));

alert('Se inscribio correctamente!');

let mensaje = "El alumno " + nombre + ' ' + apellido + ' ' +  "edad: " + edad + ' ' + "DNI: " + DNI + ' ' + "se inscribio en el curso: " + curso;
console.log(mensaje);


