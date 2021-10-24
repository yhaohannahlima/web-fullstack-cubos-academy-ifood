const x1 = 1, y1 = 1, x2 = 1, y2 = 4;
let distanciaEntreDoisPontos;

distanciaEntreDoisPontos = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
distanciaEntreDoisPontos = distanciaEntreDoisPontos.toFixed(2);

console.log(`A distância entre os pontos é igual a ${distanciaEntreDoisPontos}.`);


