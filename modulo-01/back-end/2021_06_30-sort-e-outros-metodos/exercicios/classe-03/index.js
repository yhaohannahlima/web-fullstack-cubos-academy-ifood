const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acc, valor) => acc > valor ? acc : valor);
console.log(maiorNumero);