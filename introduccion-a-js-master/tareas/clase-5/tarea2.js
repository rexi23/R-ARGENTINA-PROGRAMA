var $bienvenidoUser = document.querySelector("#datos-usuario")

function saludarUsuario(NOMBRE_USUARIO, APELLIDO_USUARIO, EDAD_USUARIO) {
    return NOMBRE_USUARIO + " " + APELLIDO_USUARIO + "de " + EDAD_USUARIO;
}

var $botonEnviar = document.querySelector("#Enviar-informacion");
$botonEnviar.onclick = function () {
    const TITULO_NUEVO = document.querySelector("#TITULO");
    const NOMBRE_USUARIO = document.querySelector("#nombre-usuario").value;
    const APELLIDO_USUARIO = document.querySelector("#apellido-usuario").value;
    const EDAD_USUARIO = document.querySelector("#edad-usuario").value;
    var nuevoParrafo = document.createElement("p");
    nuevoTexto = document.createTextNode(saludarUsuario(NOMBRE_USUARIO, APELLIDO_USUARIO, EDAD_USUARIO));
    nuevoParrafo.appendChild(nuevoTexto);
    $bienvenidoUser.appendChild(nuevoParrafo);
TITULO_NUEVO.innerText = "Bienvenido, " + NOMBRE_USUARIO


    return false;
}

