const capital = 1000, taxaFixaDeJuros = 0.125, tempo = 5;
let montante;

montante = capital * Math.pow((1 + taxaFixaDeJuros), tempo);
montante = montante.toFixed(2);

console.log(`O valor do montante após ${tempo} meses, será de R$${montante}.`);