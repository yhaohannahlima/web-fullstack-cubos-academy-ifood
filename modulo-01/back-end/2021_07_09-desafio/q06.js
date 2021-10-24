// CAÇULA DOS ADULTOS
function solucao(lista) {
    const listaOrdenada = lista.sort((a, b) => a - b);
    const pessoaMaisNova = listaOrdenada.find(valor => valor >= 18);

    if (pessoaMaisNova) {
        console.log(pessoaMaisNova);
    } else {
        console.log('CRESCA E APARECA');
    }
}

const idades = [12, 16, 27, 18];
solucao(idades);