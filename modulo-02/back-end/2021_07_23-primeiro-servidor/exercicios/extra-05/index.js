const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

//LETRA A
let rodadaDaVez = 0;
app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[rodadaDaVez]} jogar!`);
    rodadaDaVez = rodadaDaVez + 1;

    if (rodadaDaVez === jogadores.length) {
        rodadaDaVez = 0;
    }
});


//LETRA B
app.get('/remover', (req, res) => {
    const indice = Number(req.query.indice);

    if (indice < 0 || indice > jogadores.length) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
        return;
    }

    jogadores.splice(indice, 1);

    res.send(jogadores);
});

//LETRA C
app.get('/adicionar', (req, res) => {
    let nome = req.query.nome;
    const indice = Number(req.query.indice);

    const primeiraLetra = nome[0].toUpperCase();
    nome = `${primeiraLetra}${nome.slice(1)}`;

    if (!indice && indice !== 0) {
        jogadores.push(nome);
        res.send(jogadores);
        return;
    }

    if (indice < 0 || indice > jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
        return;
    }

    jogadores.splice(indice, 0, nome)
    res.send(jogadores);

});

app.listen(8000);

