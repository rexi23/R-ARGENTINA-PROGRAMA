/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function (event) {
    const $cantidadHabitantes = document.querySelector("#cantidad-habitantes");
    const cantidadHabitantes = Number($cantidadHabitantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadHabitantes);

    event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad("mayor", obtenerMayorNumero(numeros));
    mostrarEdad("menor", obtenerMenorNumero(numeros));
    mostrarEdad("promedio", obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear;

function crearIntegrante(indice) {
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $label = document.createElement("label");
    $label.textContent = "Edad del integrante #: " + (indice + 1);
    const $input = document.createElement("input");
    $input.type = "number";

    const $boton = document.createElement("button");
    $boton.textContent = "Agregar Salario";
    $boton.onclick = function () {
        var $inputSalario = document.createElement('input');
        $inputSalario.setAttribute('class', 'salario-habitante');
        $inputSalario.setAttribute('type', 'number');
        $div.appendChild($inputSalario);
        
    }
    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($boton);
    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div)

}

function crearIntegrantes(cantidadHabitantes) {
    if (cantidadHabitantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadHabitantes; i++) {
        crearIntegrante(i);

    }
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function resetear() {
    ocultarResultados();
    borrarIntegrantesAnteriores();
}

function ocultarBotonCalculo() {
    document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonCalculo() {
    document.querySelector("#calcular").className = "";
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}



function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;

}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
