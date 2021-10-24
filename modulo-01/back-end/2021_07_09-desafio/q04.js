// MESA DE POKER
function solucao(min, max, valores) {
    const valorAutorizado = valores.filter(valor => valor >= min && valor <= max);
    console.log(valorAutorizado);
}

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9], min = 1, max = 1;
solucao(min, max, valores);