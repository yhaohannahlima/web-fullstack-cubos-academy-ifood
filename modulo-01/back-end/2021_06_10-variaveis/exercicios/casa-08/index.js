const raio = 4;

let comprimentoDoCirculo, areaDoCirculo;

comprimentoDoCirculo = 2 * Math.PI * raio;
areaDoCirculo = Math.PI * Math.pow(raio, 2);

console.log(`Um círculo de raio ${raio}, tem ${comprimentoDoCirculo.toFixed(2)} de comprimento e ${areaDoCirculo.toFixed(2)} de área.`)