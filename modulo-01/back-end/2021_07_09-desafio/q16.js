// FÉRIAS NA CUBOS
function processData(input) {
    let numeroDeGrupos = input.trim().split(' ');

    for (i = 0; i < numeroDeGrupos.length; i++) {
        numeroDeGrupos[i] = parseInt(numeroDeGrupos[i]);
    }

    let somaTaxis = 0;
    for (i = numeroDeGrupos.length - 1; i >= 0; i--) {

        if (numeroDeGrupos[i] !== 0) {
            let valor = numeroDeGrupos[i];

            switch (i) {
                case 3:
                    somaTaxis += valor;
                    break;
                case 2:
                    somaTaxis += valor;
                    if (numeroDeGrupos[0] - valor > 0) {
                        numeroDeGrupos[0] -= valor;
                    } else if (numeroDeGrupos[0] > 0) {
                        numeroDeGrupos[0] = 0;
                    }
                    break;
                case 1:
                    if (valor % 2 === 0) {
                        somaTaxis += valor * 0.5;
                    } else {
                        const numeroDeTaxis = ((valor * 2) / 4);
                        somaTaxis += Math.ceil(numeroDeTaxis);
                        if (numeroDeGrupos[0] > 0) {
                            numeroDeGrupos[0] -= 2;
                        }
                    }
                    break;
                case 0:
                    if (valor <= 4) {
                        somaTaxis++;
                    } else {
                        const numeroDeTaxis = valor / 4;
                        somaTaxis += Math.ceil(numeroDeTaxis);
                    }
                    break;
            }
        }
    }
    console.log(somaTaxis);
}

const input = '5 1 9 0';
processData(input);