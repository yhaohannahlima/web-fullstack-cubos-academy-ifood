function imprimeStringInvertida (texto) {
    const novoArray = texto.split("");
    novoArray.reverse()
    console.log(novoArray.join(""));
}

imprimeStringInvertida("maria");
