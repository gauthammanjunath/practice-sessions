
/*const n = 8;*/

function fibonacci(n) {
    if (n == 0) return;

    let prev1 = 0;
    let prev2 = 1;
    let curr;

    for (let i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;                   //Fn=F(n-1)+F(n-2) for n>1
        prev2 = curr;
    }
    return prev2;

}
console.log(fibonacci(8));