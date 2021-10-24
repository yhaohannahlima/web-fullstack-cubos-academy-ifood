const {
    getYear, getMonth, getDate,
    isAfter, isBefore, isSaturday, isSunday
} = require('date-fns');

function taAberto(horaChegada) {
    const horaDeAbrir = new Date(getYear(horaChegada), getMonth(horaChegada), getDate(horaChegada), 7, 59);
    const horaDeFechar = new Date(getYear(horaChegada), getMonth(horaChegada), getDate(horaChegada), 18, 1);
    const horaDeFecharSabados = new Date(getYear(horaChegada), getMonth(horaChegada), getDate(horaChegada), 12, 1);

    if (isAfter(horaChegada, horaDeAbrir) && isBefore(horaChegada, horaDeFechar) &&
        !isSaturday(horaChegada) && !isSunday(horaChegada)) {
        console.log('true');

    } else if (isSaturday(horaChegada) && isAfter(horaChegada, horaDeAbrir) && isBefore(horaChegada, horaDeFecharSabados)) {
        console.log('true');

    } else {
        console.log('false');
    }
}

taAberto(new Date(2021,3,24,12,31));

