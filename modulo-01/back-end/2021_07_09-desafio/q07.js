// CONTADOR DE PALAVRAS
function solucao(texto) {
    const arrayTexto = texto.trim().split(' ');
    const contador = arrayTexto.filter(valor => valor !== '');

    console.log(contador.length);
}

const texto = ' Cuidado,    pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ';
solucao(texto);