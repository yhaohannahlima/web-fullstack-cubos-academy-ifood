const valorDaCompra = 10000;
const numeroDeParcelas = 13;

if(numeroDeParcelas === 1) {
    let valorAPagarEmReais = ((valorDaCompra - valorDaCompra * 0.1) / 100).toFixed(2);
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve pagar apenas ${valorAPagarEmReais} reais.`)
} else if (numeroDeParcelas < 7) {
    let valorDaParcelaEmReais = valorDaCompra / numeroDeParcelas / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorDaParcelaEmReais.toFixed(2)} reais, totalizando ${valorDaCompra/100} reais.`)
} else {
    let novoValorDaCompra = valorDaCompra * (Math.pow((1 + 0.01), numeroDeParcelas));
    let valorDaParcelaEmReais = (novoValorDaCompra / numeroDeParcelas) / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorDaParcelaEmReais.toFixed(2)} reais, totalizando ${(novoValorDaCompra/100).toFixed(2)} reais.`)
}
