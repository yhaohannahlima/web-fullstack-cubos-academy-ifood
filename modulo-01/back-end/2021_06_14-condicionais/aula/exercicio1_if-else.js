const temIngresso = true;
const censura = 16;
const idade = 18;

if (idade >= censura) {
    console.log("A pessoa tem idade suficiente para assistir o filme...")
    if (temIngresso === true) {
        console.log("E possui ingresso. Pode entrar!");
    } else {
        console.log("Mas, não tem ingresso. Infelizmente, não poderá entrar!")
    }
} else {
    console.log("A pessoa não pode entrar, pois não tem idade suficiente!")
}
