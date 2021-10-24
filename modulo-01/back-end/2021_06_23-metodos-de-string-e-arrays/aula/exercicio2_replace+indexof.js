const numeroEstUnidos = "1,350,000";

let numeroBrasil = numeroEstUnidos.replace(",", ".");

while (numeroBrasil.indexOf(",") !== -1) {
    numeroBrasil = numeroBrasil.replace(",", ".");
}

console.log(numeroBrasil);
