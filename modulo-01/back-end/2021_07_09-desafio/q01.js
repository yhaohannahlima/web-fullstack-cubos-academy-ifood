// SOMA DOS ELEMENTOS
function solucao(lista) {
    const passagemEuropa = lista.reduce((acc, valor) => acc + valor);
    console.log(passagemEuropa);
}

const lista = [1, 2, 3, 4, 5];
solucao(lista);