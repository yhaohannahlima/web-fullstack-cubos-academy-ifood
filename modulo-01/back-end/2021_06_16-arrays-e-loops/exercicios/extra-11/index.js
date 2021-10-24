const original = [10, 7, 13, 17, 20, 34, 100, 245];

let novoArray = [];

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray.push(item);
    }
}

console.log(novoArray);