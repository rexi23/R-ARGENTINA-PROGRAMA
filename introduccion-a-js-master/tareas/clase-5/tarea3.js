var tiempoTotal = 0;

function horaASegundos() {
    horas = Number(document.querySelector("#horas").value);
    minutos = Number(document.querySelector("#minutos").value);
    segundos = Number(document.querySelector("#segundos").value);
    return (horas * 60 * 60) + (minutos * 60) + segundos;

}

function segundosAHoras(tiempoTotal) {
    var hours = Math.floor(tiempoTotal / 60 / 60);
    var minutes = Math.floor(tiempoTotal / 60) - (hours * 60);
    var seconds = tiempoTotal % 60;
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}


var datos = document.querySelector("#datos-usuario");
var botonEnviar = document.querySelector("#enviar-info")
botonEnviar.onclick = function () {
    tiempoTotal = tiempoTotal + horaASegundos();
    var nuevoParrafo = document.createElement("p");
    var nuevoTexto = document.createTextNode(segundosAHoras(tiempoTotal));
    nuevoParrafo.appendChild(nuevoTexto);
    datos.appendChild(nuevoParrafo);

    return false;
}



