const populacaoInicialDeInfectados = 1000;
const quantidadePorTransmissao = 4;
const tempo = 100;

let populacaoInfectada;

populacaoInfectada = populacaoInicialDeInfectados * Math.pow(quantidadePorTransmissao, (tempo / 7));
populacaoInfectada = populacaoInfectada.toFixed(2);

console.log(`Decorrido o tempo de ${tempo} dias, a quantidade de pessoas infectadas será igual a ${populacaoInfectada} de pessoas.`);

