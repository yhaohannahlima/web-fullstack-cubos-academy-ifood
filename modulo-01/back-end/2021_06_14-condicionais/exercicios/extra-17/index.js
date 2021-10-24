//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

let numeroDeParcelasRestantes, valorRestante, valorDaParcela;

valorDaParcela = (valorDoProduto / quantidadeDoParcelamento) / 100;
valorRestante = (valorDoProduto - valorPago) / 100;
numeroDeParcelasRestantes = valorRestante / valorDaParcela;

if (numeroDeParcelasRestantes > 0) {
    console.log(`Restam ${numeroDeParcelasRestantes.toFixed()} parcelas de R$${valorDaParcela.toFixed(2)}.`);
} else {
    console.log(`Todas as parcelas foram pagas. A dívida está quitada!`);
}
    

