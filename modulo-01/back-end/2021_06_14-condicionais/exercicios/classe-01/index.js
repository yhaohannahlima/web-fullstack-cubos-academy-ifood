const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui
if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1);
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log(jogada2);
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1);
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log(jogada2);
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(jogada1); 
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log(jogada2);
} else {
    console.log("empate");
}