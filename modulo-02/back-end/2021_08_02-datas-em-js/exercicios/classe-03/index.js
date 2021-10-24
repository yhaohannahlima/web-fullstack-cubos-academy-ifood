const {
    getYear, getMonth, getDate,
    isAfter, isBefore
} = require('date-fns');

function taAberto(horaChegada) {
    const ano = getYear(horaChegada);
    const mes = getMonth(horaChegada);
    const dia = getDate(horaChegada);

    const horaDeAbrir = new Date(ano, mes, dia, 7, 59);
    const horaDeFechar = new Date(ano, mes, dia, 18, 1);

    console.log(isAfter(horaChegada, horaDeAbrir) && isBefore(horaChegada, horaDeFechar));

}

taAberto(new Date(2015, 1, 1, 2));