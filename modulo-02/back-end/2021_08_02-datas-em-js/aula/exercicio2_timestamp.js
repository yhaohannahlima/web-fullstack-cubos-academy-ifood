const finalDaCopa = new Date(2002, 5, 30, 8, 0, 0, 0);
const primeiroTempo = +finalDaCopa + 1000 * 2700;
const intervalo = primeiroTempo + 1000 * 900;
const primeiroGol = intervalo + 1000 * 1320;
const segundoGol = primeiroGol + 1000 * 720; 

const primeiroGolDate = new Date(primeiroGol);
const segundooGolDate = new Date(segundoGol);

console.log(primeiroGolDate, segundooGolDate);
