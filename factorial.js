


function factorial(n) {
    let num = n;
    let factNum = 1;

    for (let i = 1; i <= n; i++) {
        factNum = factNum * i;

    }
    return factNum;

}
console.log(factorial(10));