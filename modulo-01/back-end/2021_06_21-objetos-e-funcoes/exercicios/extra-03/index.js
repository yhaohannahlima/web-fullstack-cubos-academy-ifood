const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    addProduto: function (produto) {
        let i = 0;
        while (i < this.produtos.length) {
            let item = this.produtos[i];

            if (item.id === produto.id) {
                item.qtd += produto.qtd;                
                break;
            } else if (item.id !== produto.id && i !== this.produtos.length - 1) {
                i++;
            } else {
                this.produtos.push(produto);
                break;
            }
        }
    },

    calcularTotalDeItens: function () {
        let totalDeItens = 0;

        for (let item of this.produtos) {
            totalDeItens += item.qtd;
        }

        return totalDeItens = totalDeItens.toFixed();
    },

    calcularTotalAPagar: function () {
        let totalAPagar = 0;

        for (let item of this.produtos) {
            totalAPagar += (item.qtd * item.precoUnit) / 100;
        }

        return totalAPagar = totalAPagar.toFixed();
    },

    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$ ${this.calcularTotalAPagar()},00`);
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        `);

        let totalPorItem = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            let item = this.produtos[i];

            totalPorItem = (item.qtd * item.precoUnit) / 100;

            console.log(`Item ${i + 1} - ${item.nome} - ${item.qtd} und - R$ ${totalPorItem.toFixed()},00
            `);

            if (i === this.produtos.length - 1) {
                console.log(`Total de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$ ${this.calcularTotalAPagar()},00`);
            }
        }
    },

    calcularDesconto: function () {
        let desconto = 0, descontoQuatroItens = 0, descontoMaisDe100 = 0;

        if (this.calcularTotalDeItens() > 4) {
            let itemDeMenorValor = this.produtos[0].precoUnit;

            for (let i = 0; i < this.produtos.length; i++) {
                let item = this.produtos[i];

                if (item.precoUnit < itemDeMenorValor) {
                    itemDeMenorValor = item.precoUnit;
                }
            }

            descontoQuatroItens = (itemDeMenorValor / 100);
        }

        if (this.calcularTotalAPagar() > 100) {
            descontoMaisDe100 = this.calcularTotalAPagar() * 10 / 100;
        }

        if (descontoQuatroItens >= descontoMaisDe100) {
            desconto = descontoQuatroItens;
        } else if (descontoQuatroItens < descontoMaisDe100) {
            desconto = descontoMaisDe100;
        } else {
            desconto = desconto;
        }

        return desconto;
    }    
}

console.log(carrinho.calcularTotalDeItens());
console.log(carrinho.calcularTotalAPagar());
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
let desconto = carrinho.calcularDesconto();
console.log(`O desconto é de R$${desconto},00`);

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
console.log(carrinho.calcularTotalDeItens());
console.log(carrinho.calcularTotalAPagar());
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
desconto = carrinho.calcularDesconto();
console.log(`O desconto é de R$${desconto},00`);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
console.log(carrinho.calcularTotalDeItens());
console.log(carrinho.calcularTotalAPagar());
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
desconto = carrinho.calcularDesconto();
console.log(`O desconto é de R$${desconto},00`);
