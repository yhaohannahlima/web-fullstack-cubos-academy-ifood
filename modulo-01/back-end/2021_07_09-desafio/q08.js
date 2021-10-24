// AMERICANO
function solucao(numeros) {
    const jogadorSorteado = numeros.reduce((acc, valor) => acc + valor);
    const resto = jogadorSorteado % numeros.length;

    if (jogadorSorteado > numeros.length) {
        if (resto === 0) {
            console.log(numeros.length);
        } else {
            console.log(resto);
        }
    } else {
        console.log(jogadorSorteado);
    }
}

const numeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
solucao(numeros);