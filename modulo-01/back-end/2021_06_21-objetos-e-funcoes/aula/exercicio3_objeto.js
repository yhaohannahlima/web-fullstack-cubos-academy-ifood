const comanda = {
    nome: "Pedro",
    idade: 19,
    produtos: [
        {
            nome: "Batata Frita",
            precoUnit: 1500,
            quantidade: 2
        },
        {
            nome: "Queijo Coalho",
            precoUnit: 1800,
            quantidade: 1
        },
        {
            nome: "Cerveja",
            precoUnit: 800,
            quantidade: 2
        }
    ]
};

console.log(comanda.nome);
console.log(comanda.idade);

comanda.idade = 18;

console.log(comanda.idade);
console.log(comanda.produtos[0].nome);
console.log(comanda.produtos[comanda.produtos.length - 1].precoUnit);