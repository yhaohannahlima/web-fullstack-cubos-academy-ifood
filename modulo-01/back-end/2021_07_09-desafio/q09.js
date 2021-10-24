// PROMOÇÃO
function solucao(precos) {
    const ordenaPrecos = precos.sort((a, b) => a - b);
    const valorDaCompra = ordenaPrecos.reduce((acc, valor) => acc + valor);
    const desconto = ordenaPrecos[0] - ordenaPrecos[0] * (50 / 100);

    console.log(`${precos.length < 3 ? valorDaCompra : valorDaCompra - desconto}`);
}

const precos = [150, 50];
solucao(precos);