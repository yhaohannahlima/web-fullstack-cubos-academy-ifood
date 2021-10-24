// ZERINHO OU UM
function solucao(jogadores) {
    const joga0 = jogadores.filter(valor => valor.jogada === 0);
    const joga1 = jogadores.filter(valor => valor.jogada === 1);

    let index = 0;
    if (joga0.length === 1) {
        index = jogadores.findIndex(valor => valor.jogada === 0);
        console.log(`${jogadores[index].nome}`);
    } else if (joga1.length === 1) {
        index = jogadores.findIndex(valor => valor.jogada === 1);
        console.log(`${jogadores[index].nome}`);
    } else {
        console.log('NINGUEM');
    }
}

const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 1
    },
    {
      "nome": "Beach",
      "jogada": 1
    },
    {
      "nome": "Laurel",
      "jogada": 1
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    },
    {
      "nome": "Alison",
      "jogada": 1
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ];

solucao(jogadores);