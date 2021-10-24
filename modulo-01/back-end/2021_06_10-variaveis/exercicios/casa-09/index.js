const numeroDeLadosDoPoligono = 6;
let somaDosAngulosInternos, valorDosAngulos;

somaDosAngulosInternos = (numeroDeLadosDoPoligono - 2) * 180;
valorDosAngulos = somaDosAngulosInternos / numeroDeLadosDoPoligono;

console.log(`Um polígono de ${numeroDeLadosDoPoligono} lados, apresenta soma dos ângulos internos igual a ${somaDosAngulosInternos}°. Considerando que todos os ângulos desse polígono são iguais, cada um vale ${valorDosAngulos.toFixed(2)}°.`);
