const diametro = 6;
let volume, raio;

raio = diametro / 2;
volume = (4 /3) * Math.pow(raio, 3);

console.log(`O volume de uma esfera de raio ${raio.toFixed(2)} é ${volume.toFixed(2)} PI.`);