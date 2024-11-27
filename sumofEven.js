function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i; //2,6,12,20,30,42,56,72,90,110
    }
    console.log(sum);
}

let z = 20;
sumEvenNumbers(z);
