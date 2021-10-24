const jogo = {
    jogadores: ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'],
    
    calcularTempoPorJogador: function () {
        const tempoPorJogador = (10 / this.jogadores.length) * 1000;
        return tempoPorJogador; 
    },
    
    imprimirNome: function (nomeDoJogador) {
        console.log(`Jogada de ${nomeDoJogador}`);
    },

    inicioDoJogo: function () {
        console.log(`Início de uma nova rodada`);
    },

    finalDoJogo: function () {
        console.log(`A rodada terminou`);
    }
}

let i = 1;

function imprimirRodada (jogadores) {
    if (i >= jogo.jogadores.length) {
        clearInterval(intervalId);            
        jogo.finalDoJogo();
    } else {
        jogo.imprimirNome(jogo.jogadores[i]);
        i++;
    }
}

jogo.inicioDoJogo();
jogo.imprimirNome(jogo.jogadores[0]);
const intervalId = setInterval(imprimirRodada, jogo.calcularTempoPorJogador());


