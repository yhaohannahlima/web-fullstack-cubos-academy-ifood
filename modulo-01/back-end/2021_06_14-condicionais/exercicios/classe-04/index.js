const ladoA = 6;
const ladoB = 6;

//seu código aqui
if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("É bucha de Branco.");
    } else if (ladoA === 1) {
        console.log("É bucha de Ás.");
    } else if (ladoA === 2) {
        console.log("É bucha de Duque.");
    } else if (ladoA === 3) {
        console.log("É bucha de Terno.");
    } else if (ladoA === 4) {
        console.log("É bucha de Quadra.");
    } else if (ladoA === 5) {
        console.log("É bucha de Quina.");
    } else if (ladoA === 6) {
        console.log("É bucha de Sena.");
    }
} else {
    console.log("Não é bucha.");
}