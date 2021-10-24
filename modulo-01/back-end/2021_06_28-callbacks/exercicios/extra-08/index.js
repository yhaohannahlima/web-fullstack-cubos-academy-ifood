const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda'];

const letraComA = nomes.filter(valor => valor[0] === 'a' || valor[0] === 'A');

console.log(letraComA);