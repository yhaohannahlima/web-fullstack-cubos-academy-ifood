const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 2;

function encontrarCarros (arrayCarros, numero) {
    console.log(`${arrayCarros.slice(numero, numero + 3).join(' - ')}`);
}

encontrarCarros(nomes, posicao);