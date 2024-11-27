//print all even numbers between 0-10

function even(num) {
    let i;                //
    for (i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }


    }
}
//
let x = 20;
even(x);  //calls the function and passing the value of x as an arguement







/* function even(num) {
    // Use the parameter num and avoid re-declaring it with var inside the function beacuse of it over writes the parameter num
    for (var i = 2; i <= num; i += 2) {
        console.log(i);
    }
}
var num = 10;
even(num);
 */






/*  let i = 11;

if (i % 2 == 0) {
    console.log("The number is even " + i);
} else {
    console.log("The number is odd");
} 
 */