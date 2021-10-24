const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce ((acc, valor) => acc.length >= valor.length ? acc : valor);
console.log(maiorString);

