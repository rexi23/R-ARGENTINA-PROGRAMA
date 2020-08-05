// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


/*  const MI_NOMBRE = "Bartolome"
const NOMBRE_MAMA = "Barbara"
const nombreUsuario = prompt("Cómo te llamas?")

if (MI_NOMBRE === nombreUsuario) {
    console.log(`Yo también me llamo ${MI_NOMBRE}!`)
} else if (nombreUsuario === NOMBRE_MAMA) {
    console.log(`${NOMBRE_MAMA}, te llamas igual a mi madre!` )
} else if (nombreUsuario.trim().length === 0) {
    console.log("No ingresaste nada!")
} else {
    console.log(`Hola ${nombreUsuario}!`)
}

 */

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/* 

const MI_EDAD = 22
const EDAD_USER = prompt("Cuantos años tenes?" || "").toLowerCase();
if (EDAD_USER === MI_EDAD) {
    console.log("Tenés la misma edad que yo!")
} else if (EDAD_USER > "22") {
    console.log("Sos mas grande que yo")
} else {
    console.log("Sos más pendejo que yo.")
}


 */


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_REQUERIDA = 18
const TIENEDOCUMENTO = PreguntarDniEnLaEntrada();


function PreguntarDniEnLaEntrada() {
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

const TIENEDNI = prompt("Tenés documento?"|| "").toLowerCase();
if (TIENEDNI == RESPUESTA_SI) {
    return true
} else if (TIENEDNI === RESPUESTA_NO) {
    alert ("Andá a buscar tu DNI PIBE");
    return false
} else {
    alert ("No te entendí");
 return PreguntarDniEnLaEntrada();
}
}
