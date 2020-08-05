var lista = document.querySelectorAll("#lista li");
var arrayLista = [];
for (let i=0; i < lista.length ; i++) {
arrayLista[i] = Number(lista[i].innerText);
}

var promedioNumeros = 0
function promedioLista () {
    for (let i=0; i < arrayLista.length ; i++) {
promedioNumeros = promedioNumeros + Number(arrayLista[i])
    }
    return promedioNumeros / arrayLista.length
}




var body = document.querySelector("body")
var nuevoParrafo = document.createElement("em");
var nuevoTexto = document.createTextNode("El numero más alto es " + Math.max(...arrayLista) + ", El numero mas bajo es " + Math.min(...arrayLista) + ", El promedio de numero es " + promedioLista());
nuevoParrafo.appendChild(nuevoTexto);
body.appendChild(nuevoParrafo);









