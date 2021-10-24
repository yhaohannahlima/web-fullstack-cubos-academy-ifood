const montante = 90000, capitalInicial = 60000, tempo = 24;
let taxaDeJuros;

taxaDeJuros = (Math.pow((montante / capitalInicial), (1 / tempo))) - 1;
taxaDeJuros = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capitalInicial.toFixed(2)} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(2)}%, pois após ${tempo} meses você teve que pagar ${montante.toFixed(2)} reais.`);
