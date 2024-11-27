const { error } = require("console");

//Function declaration
function calcAge1(birthyear) {
    return 2024 - birthyear;
}
//invoke or execute the function
const age1 = calcAge1(2000);
console.log(age1);


//Function Expression 
//A function can be defined and assigned to a variable.
const calcAge2 = function calcAge1(birthyear) {
    return 2024 - birthyear;
}
const age2 = calcAge2(2002);
console.log(age2);

//Arrow functions  can be called directly and if your passing any argument in this  const calcAge3 = (birthyear) => 2024 - birthyear;

const calcAge3 = birthyear => 2024 - birthyear;
const age3 = calcAge3(2003);
console.log(age3);



/* different types of errors 
Syntax error 
Refernce error 
Type error
Range error 
 */