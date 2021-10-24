//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorASerPago;

if (tipoDePagamento === "credito") {
    valorASerPago = valorDoProduto - (valorDoProduto * 5 / 100);
} else if (tipoDePagamento === "cheque") {
    valorASerPago = valorDoProduto - (valorDoProduto * 3 / 100);
} else {
    valorASerPago = valorDoProduto - (valorDoProduto * 10 / 100);
}

console.log(`Valor a ser pago: R$${(valorASerPago / 100).toFixed(2)}.`);