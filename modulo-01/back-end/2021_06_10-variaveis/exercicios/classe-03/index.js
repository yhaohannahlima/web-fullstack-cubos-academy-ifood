const valorDoTenis = 129.99, valorTotalDaPorcentagem = 100, dinheiroDisponivel = 80;
let descontoEmPorcentagem;

descontoEmReais = valorDoTenis - dinheiroDisponivel;

descontoEmPorcentagem = (descontoEmReais * valorTotalDaPorcentagem) / valorDoTenis;
descontoEmPorcentagem = descontoEmPorcentagem.toFixed(2);

console.log(`O desconto necessário para a compra do tênis deverá ser de ${descontoEmPorcentagem}%.`);

