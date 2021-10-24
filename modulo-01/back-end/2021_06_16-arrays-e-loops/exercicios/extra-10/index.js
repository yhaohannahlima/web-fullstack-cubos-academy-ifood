const numeros = [5, 16, 20, 7];

let maiorDiferença = 0;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];

    for (let i = 1; i < numeros.length; i++) {
        let diferenca = numero - numeros[i];
        diferenca = diferenca * (-1);

        if (diferenca > maiorDiferença) {
            maiorDiferença = diferenca;
        }
    }
}

console.log(maiorDiferença);