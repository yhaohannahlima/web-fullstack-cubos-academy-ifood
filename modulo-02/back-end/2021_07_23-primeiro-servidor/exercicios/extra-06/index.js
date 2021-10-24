const express = require ('express');
const app = express();

let minutosNumero = 0, segundosNumero = 0;
let intervalID;

//LETRA A 
app.get('/', (req, res) => {
    let minutos = minutosNumero.toString();
    let segundos = segundosNumero.toString();

    minutos = minutos.padStart(2, '0');
    segundos = segundos.padStart(2, '0');

    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
});

//LETRA B
app.get('/iniciar', (req, res) => {
    minutosNumero = 0, segundosNumero = 0;

    intervalID = setInterval(() => {
        segundosNumero++;

        if(segundosNumero === 60) {
            minutosNumero++;
            segundosNumero = 0;
        }

    }, 1000);

    res.send(`Cronômetro iniciado!`);
});

//LETRA C
app.get('/pausar', (req, res) => {
    clearInterval(intervalID);

    res.send(`Cronômetro pausado!`);
});

//LETRA D
app.get('/continuar', (req, res) => {    
    intervalID = setInterval(() => {
        segundosNumero++;

        if(segundosNumero === 60) {
            minutosNumero++;
            segundosNumero = 0;
        }

    }, 1000);

    res.send(`Cronômetro continuando!`);
});

//LETRA E
app.get('/zerar', (req, res) => {
    minutosNumero = 0, segundosNumero = 0;

    res.send(`Cronômetro zerado!`);
});

app.listen(8000);