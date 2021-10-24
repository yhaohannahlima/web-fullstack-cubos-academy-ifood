const valorDaCompra = 10000;
const numeroDeParcelas = 1;

if(numeroDeParcelas === 1) {
    let valorAPagar = valorDaCompra - (valorDaCompra * 0.1); // também pode ser escrito como: valorAPagar = valorDaCompra * (90 / 100);
    valorAPagar = valorAPagar / 100;

    let unidade = valorAPagar === 1 ? "real" : "reais";

    console.log(`Você está pagando a compra a vista, por isso tem um desconto de 10% e o valor a pagar é ${valorAPagar} ${unidade}.`)
} else {
    let valorDaParcela = valorDaCompra / numeroDeParcelas;
    valorDaParcela = valorDaParcela / 100;

    let unidade = valorDaCompra === 1 ? "real" : "reais";

    console.log(`Você está parcelando a compra em ${numeroDeParcelas}x e o valor de cada parcela é ${valorDaParcela}, totalizando ${valorDaCompra / 100} ${unidade}.`)
}
