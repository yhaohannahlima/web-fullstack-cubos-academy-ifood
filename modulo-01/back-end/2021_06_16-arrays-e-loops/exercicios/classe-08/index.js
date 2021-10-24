const numeros = [300, 4, 1, 8, 11, 7, 5];

let oMaiorNumero = 0;

for (let item of numeros) {
    if (item > oMaiorNumero) {
        oMaiorNumero = item;
    }
}

console.log(oMaiorNumero);