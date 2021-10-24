const raio = 2, altura = 10;
let areaTotalDoCilindro;

areaTotalDoCilindro = 2 * Math.PI * raio * (raio + altura);

console.log(`A área total de um cilindro de raio ${raio.toFixed(2)} e altura ${altura.toFixed(2)} é igual a ${areaTotalDoCilindro.toFixed(2)}.`);