const array = [2, 10, 33, 52, 68, 9];

const ehUmQuadradoPerfeito = array.some(valor => {
    if (valor % 1 === 0 && valor >= 0) {
        const resultado = Math.sqrt(valor);
        if (resultado % 1 === 0 && resultado >= 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
});

console.log(ehUmQuadradoPerfeito);
