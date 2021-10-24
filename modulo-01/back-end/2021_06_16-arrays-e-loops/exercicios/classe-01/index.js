const numeros = [2, 3, 4, 6];

let somaDosNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
    somaDosNumeros += numeros[i];
}

console.log(`A soma de todos os números do array é igual a ${somaDosNumeros}.`)