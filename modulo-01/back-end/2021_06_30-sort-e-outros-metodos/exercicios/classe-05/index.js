const palavras = ["Arroz", "cerveja", "feijão", "carne", "macarrão", "Vodka"];

const palavrasMinusculo = palavras.map(valor => valor.toLowerCase());

const validapalavras = palavrasMinusculo.some(valor => valor === "cerveja" || valor === "vodka");

if (validapalavras) {
    console.log("Revise sua lista, João. Possui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos as compras!");
}
