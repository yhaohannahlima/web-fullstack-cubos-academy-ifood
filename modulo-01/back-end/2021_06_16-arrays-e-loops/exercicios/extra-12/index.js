const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let item of filaDeFora) {
    if (filaDeDentro.length <= 4 && filaDeFora !== []) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    } else {
        break;
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);
