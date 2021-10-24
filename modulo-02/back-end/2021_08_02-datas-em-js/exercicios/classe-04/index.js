const {
    getYear, getMonth, getDate,
    isAfter, isBefore, isSaturday, isSunday
} = require('date-fns');

function taAberto(horaChegada) {
    const horaDeAbrir = new Date(getYear(horaChegada), getMonth(horaChegada), getDate(horaChegada), 7, 59);
    const horaDeFechar = new Date(getYear(horaChegada), getMonth(horaChegada), getDate(horaChegada), 18, 1);
    
    console.log(isAfter(horaChegada, horaDeAbrir) && 
                isBefore(horaChegada, horaDeFechar) && 
                !isSaturday(horaChegada) && 
                !isSunday(horaChegada));
}

taAberto(new Date(2021,3,26,7,59));

