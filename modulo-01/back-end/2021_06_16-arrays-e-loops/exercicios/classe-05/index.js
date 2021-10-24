const original = [2, 3, 15, 100, 22, 88, 200];

let numerosPares = [];

for(let item of original) {
    if(item % 2 === 0) {
        numerosPares.push(item);
    }
}

console.log(numerosPares);