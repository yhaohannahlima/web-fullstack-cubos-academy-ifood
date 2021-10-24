// TRUCO
function solucao(carta) {
    const cartaOpcoes = ['Q', 'J', 'K', 'A', '2', '3'];
    const manilha = cartaOpcoes.findIndex(valor => valor === carta);

    if (manilha === cartaOpcoes.length - 1 ) {
        console.log(`${cartaOpcoes[0]}`);
    } else {
        console.log(`${cartaOpcoes[manilha + 1]}`);
    }
}

const cartaParaCima = 'K'; 
solucao(cartaParaCima);