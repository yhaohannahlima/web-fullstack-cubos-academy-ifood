const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const validaPalavras = palavras.some(valor => valor.length > 5);

if (validaPalavras) {
    console.log("Existe palavra inválida");
} else {
    console.log("Array validado");
}