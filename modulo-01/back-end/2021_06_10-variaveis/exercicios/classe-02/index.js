const grausFahrenheit = 73; 
let grausCelsius;

grausCelsius = (grausFahrenheit - 32) * (5 / 9);
grausCelsius = grausCelsius.toFixed(2);

console.log(`A temperatura agora na sua cidade é de ${grausCelsius}°C.`)