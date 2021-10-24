const numeros = [1, 4, 2, 8, 12, 6, 5, 20];

let somaDosPares = 0;

for (let item of numeros) {
    if (item % 2 === 0) {
        somaDosPares += item;
    }
}

console.log(somaDosPares);
