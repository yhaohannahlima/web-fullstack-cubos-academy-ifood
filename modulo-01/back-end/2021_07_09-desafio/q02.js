// MÉDIA ARITMÉTICA
function solucao(lista) {
    const mediaPorDia = lista.reduce((acc, valor) => acc + valor);
    console.log(`${mediaPorDia / lista.length}`);
}

const lista = [2, 3, 4, 11];
solucao(lista);