const idade = 66;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;

if (idade >= 12 && idade <=65 && possuiPatologia === false && altura >= 150) {
    if (idade < 18 || ehEstudante) {
        console.log("10 reais");
    } else {
        console.log("20 reais");
    }
} else {
    console.log("ACESSO NEGADO");
}

