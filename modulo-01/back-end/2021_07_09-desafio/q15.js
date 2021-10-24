function processData(input) {
    const palavras = input.trim().toLowerCase().split('\n');

    let palavraCerta = palavras[0].split('');
    let palavraDigitada = palavras[1].split('');

    for (let i = palavraCerta.length - 1; i >= 0; i--) {
        for (let index = palavraDigitada.length - 1; index >= 0; index--) { 
            if (palavraDigitada[index] === palavraCerta[i]) {
                palavraDigitada.pop();
                palavraCerta.pop();
                break;
            } else {
                palavraDigitada.pop();
            }
        }
    }

    if (palavraCerta.length === 0) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }
}

const input = 'CUBOS\ncuggbyos';
processData(input);