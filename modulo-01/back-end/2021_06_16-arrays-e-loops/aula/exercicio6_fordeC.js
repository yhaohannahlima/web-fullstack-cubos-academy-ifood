const nomes = ["Thierry", "Rafaela", "Maria", "João", "Pedro"];

let encontrado = false;

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "João") {
        encontrado = true;
        console.log(i);
        break;
    }
}

if(!encontrado) {
    console.log("não encontrado");
}
