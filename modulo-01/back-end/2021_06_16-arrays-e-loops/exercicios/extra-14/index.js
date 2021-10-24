const arrayA = [5, 32, 3, 44, 1, 51];
const arrayB = [57, 4, 21, 2, 13, 0];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
}