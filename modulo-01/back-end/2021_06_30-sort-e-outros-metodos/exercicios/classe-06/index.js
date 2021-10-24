const numeros = [0, 5, 122, 4, 6, 72, 8, 44];

const numerosPares = numeros.every(valor => valor % 2 === 0);

if (numerosPares) {
    console.log("Array válido!");
} else {
    console.log("Array inválido!");
}