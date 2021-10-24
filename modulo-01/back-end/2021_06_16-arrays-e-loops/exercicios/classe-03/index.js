const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    
    let item = numeros[i];
    if (item === 10) {
        console.log(i);
        encontrado = true;
    }
}

if (!encontrado) {
    console.log(-1);
}
