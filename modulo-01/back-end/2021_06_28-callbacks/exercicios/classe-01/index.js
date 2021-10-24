const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidadesFiltrado = cidades.filter(x => x.length <= 8);

const cidadesModificado = cidadesFiltrado.join(', ');

console.log(cidadesFiltrado);
console.log(cidadesModificado);