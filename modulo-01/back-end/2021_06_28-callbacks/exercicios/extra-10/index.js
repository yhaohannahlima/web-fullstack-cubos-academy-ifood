const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

const arraySemRepeticao = [];

notas.forEach(valor => {
    const jaExiste = arraySemRepeticao.find(item => item === valor);

    if(!jaExiste) {
        arraySemRepeticao.push(valor);
    }
});

console.log(arraySemRepeticao);

