const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

//Letra a)
let novoArrayFrutas = frutas.reverse();
console.log(novoArrayFrutas.join(", "));

//Letra b)
frutas.reverse(), frutas.splice(-1, 1, "Melão"), frutas.shift();
console.log(frutas);