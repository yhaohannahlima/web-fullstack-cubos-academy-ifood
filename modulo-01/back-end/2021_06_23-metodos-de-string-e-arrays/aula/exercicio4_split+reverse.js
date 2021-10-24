function imprimeStringInvertida (texto) {
    const novoArray = texto.split("");
    novoArray.reverse()

    let resultadoFinal = "";
    for (let letra of novoArray) {
        resultadoFinal += letra;
    }

    console.log(resultadoFinal);
}

imprimeStringInvertida ("maria");

