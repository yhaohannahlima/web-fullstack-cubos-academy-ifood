function solucao(joao, andre) {
    if(joao === "PEDRA" && andre === "PAPEL") {
        console.log("ANDRE");
    } else if(joao === "PEDRA" && andre === "TESOURA") {
        console.log("JOAO");
    } else if(joao === "PEDRA" && andre === "PEDRA") {
        console.log("EMPATE");
    } else if(joao === "PAPEL" && andre === "PEDRA") {
        console.log("JOAO");
    } else if(joao === "PAPEL" && andre === "TESOURA") {
        console.log("ANDRE");
    } else if(joao === "PAPEL" && andre === "PAPEL") {
        console.log("EMPATE");
    } else if(joao === "TESOURA" && andre === "PAPEL") {
        console.log("JOAO");
    } else if(joao === "TESOURA" && andre === "PEDRA") {
        console.log("ANDRE");
    } else if(joao === "TESOURA" && andre === "TESOURA") {
        console.log("EMPATE");
    }
}