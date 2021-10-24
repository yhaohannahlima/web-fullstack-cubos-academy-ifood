// TAXÍMETRO
function solucao(min, km) {
    let precoParcialMinuto, precoParcialKm, precoDaViagem;

    if (min <= 20 && km <= 10) {
        precoDaViagem = (50 * min) + (70 * km);
    } else {
        if (min > 20 && km > 10) {
            precoParcialMinuto = min - 20;
            precoParcialKm = km - 10;
            precoDaViagem =  1700 + (precoParcialMinuto * 30) + (precoParcialKm * 50);
        } else if (min > 20) {
            precoParcialMinuto = min - 20;
            precoDaViagem =  1000 + (precoParcialMinuto * 30) + (70 * km);
        } else {
            precoParcialKm = km - 10;
            precoDaViagem =  700 + (precoParcialKm * 50) + (50 * min);
        }
    }

    console.log(Math.trunc(precoDaViagem));
}

const min = 25, km = 11.5;
solucao(min, km);
