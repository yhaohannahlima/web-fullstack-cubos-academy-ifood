const peso = 64;
const altura = 1.60;
let IMC;

IMC = peso / (Math.pow(altura, 2));
IMC = IMC.toFixed(2);

console.log(`O IMC da pessoa em questão é igual a ${IMC}.`);