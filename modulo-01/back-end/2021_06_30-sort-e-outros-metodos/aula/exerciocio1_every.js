const precos = [1000, 1670, 540, 272];

const verificacaoDePrecos = precos.every(preco => {
    if (preco % 1 === 0 && preco >= 0) {
        return true;
    } else {
        return false;
    }
});

console.log(verificacaoDePrecos);
