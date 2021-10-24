// DISTÂNCIA MÁXIMA
function processData(input) {
    const linhas = input.trim().split("\n");
    const n = parseFloat(linhas[0], 10);
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }

    let calculoDaDistancia, maiorDistancia = 0;

    for (let i = 0; i < coordenadas.length; i++) {
        const Xa = coordenadas[i].x, Ya = coordenadas[i].y;
        for (let index = i + 1; index < coordenadas.length; index++) {
            const Xb = coordenadas[index].x, Yb = coordenadas[index].y;
                calculoDaDistancia = Math.sqrt(Math.pow((Xa - Xb), 2) + Math.pow((Ya - Yb), 2));
                
            if (calculoDaDistancia > maiorDistancia) {
                maiorDistancia = calculoDaDistancia;
            }
        }
    }

    console.log(maiorDistancia);
}

const input = '5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7';
// const input = '4\n0 1\n0 1\n0 1\n2 1';
processData(input);