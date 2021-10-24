// CAPS LOCK ON
function processData(input) {
    const arrayPalavra = input.split('');
    const pedacoPalavra = arrayPalavra.slice(1);
    const teste1Palavra = arrayPalavra.every(valor => valor === valor.toUpperCase());
    const teste2Palavra = arrayPalavra.find(valor => valor === valor.toLowerCase());
    const teste3Palavra = pedacoPalavra.every(valor => valor === valor.toUpperCase());

    const palavraCorrigida = [];
    if (teste1Palavra || teste2Palavra && teste3Palavra) {
        for (let i = 0; i < arrayPalavra.length; i++) {
            if (arrayPalavra[i] === arrayPalavra[i].toUpperCase()) {
                letraCorrigida = arrayPalavra[i].toLowerCase();
            } else {
                letraCorrigida = arrayPalavra[i].toUpperCase();
            }
            palavraCorrigida.push(letraCorrigida);
        }
    } else {
        console.log(input);
    }
    console.log(palavraCorrigida.join(''));
}

const input = 'cAPS';
processData(input);
