const distPercorrida = 4000, tempo = 3600;
let velocidade;

velocidade = distPercorrida / tempo;
velocidade = velocidade * 3.6;
velocidade = velocidade.toFixed(2);

console.log(`Sua velocidade média é de ${velocidade}km/h.`);