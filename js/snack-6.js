// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
]

let calc = 0;


for (let i = 0 ; i < numberList.length ; i++){
    if (numberList[i] % 2 == 1){
        calc = calc + numberList[i];
    }
}

console.log(calc)

