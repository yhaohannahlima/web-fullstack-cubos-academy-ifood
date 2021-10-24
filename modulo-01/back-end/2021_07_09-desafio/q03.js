// NÚMEROS DENTRO DE UM INTERVALO
function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return console.log('PERTENCE');
    } else {
        return console.log('NAO PERTENCE');
    }
}

const numero = 10, limiteInferior = 5, limiteSuperior = 20;
solucao(numero, limiteInferior, limiteSuperior);