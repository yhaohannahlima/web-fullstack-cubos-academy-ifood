const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasFormatado = frutas.map((fruta, index) => {
    let letrasEmMinusculo = fruta.slice(1);

    letrasEmMinusculo = letrasEmMinusculo.toLowerCase();

    const primeiraLetra = fruta[0].toUpperCase();

    return fruta = `${index} - ${primeiraLetra + letrasEmMinusculo}`;
});

console.log(frutasFormatado);

