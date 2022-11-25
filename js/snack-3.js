// Calcola la somma dei primi 10 numeri di un array.
// Calcola la somma e la media dei primi 10 numeri di un array.

const numbers = [
    2,
    2,
    2,
    5,
    2,
    2,
    8,
    2,
    2,
    2
]

let calc = 0;

let media = 0;

for (let i = 0 ; i < 10 ; i++){
    calc += numbers[i];
}

media = calc / 10;

console.log(calc);
console.log(media);