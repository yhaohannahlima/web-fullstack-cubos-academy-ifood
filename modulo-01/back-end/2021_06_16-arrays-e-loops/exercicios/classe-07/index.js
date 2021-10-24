const nomes = ["Ana", "Joana", "antony", "Carlos", "amanda", "Andre"];

let nomesComA = [];

for (let i = 0; i < nomes.length; i++) {
    let item = nomes[i];

    if (item[0] === "A" || item[0] === "a") {
        nomesComA.push(item);
    }
}

console.log(nomesComA);