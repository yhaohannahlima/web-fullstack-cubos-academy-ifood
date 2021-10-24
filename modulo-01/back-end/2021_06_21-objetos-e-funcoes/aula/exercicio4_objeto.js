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


let somaDaComanda = 0;
for (let item of comanda.produtos) {
    precoPorProduto = item.precoUnit * item.quantidade;
    somaDaComanda += precoPorProduto;
}

console.log(somaDaComanda);
